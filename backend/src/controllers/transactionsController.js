import { sql } from "../config/db.js";

export async function getTransactionsByUserId(req, res) {
  try {
    const { userId } = req.params;
    const transactions = await sql`
    SELECT * FROM transaction WHERE user_id = ${userId} ORDER BY created_at DESC
    `;
    res.status(200).json(transactions);
    console.log(transactions);
    // console.log(userId);
  } catch (error) {
    console.log("Error getting the transaction", error);
    res.status(500).json({ message: "Interal server error" });
  }
}

// export async function createTransaction(req, res) {
//   try {
//     // title, amount, category, user_id
//     const { title, amount, category, user_id } = req.body;
//     if (!title || !user_id || !category || amount === undefined) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
//     const transaction = await sql`
//           INSERT INTO transaction(user_id, title, amount,category)
//           VALUES (${user_id},${title},${amount},${category})
//           RETURNING *
//         `;
//     res.status(201).json(transaction[0]);
//     console.log(transaction);
//   } catch (error) {
//     console.log("Error creating the transaction", error);
//     res.status(500).json({ message: "Interal server error" });
//   }
// }


export async function createTransaction(req, res) {
  try {
    let { title, amount, category, user_id } = req.body;

    if (!title || !user_id || amount === undefined) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    // AUTO CATEGORY (SERVICE CALL)
    if (!category) {
      category = await predictCategory(title);
    }

    const transaction = await sql`
      INSERT INTO transaction(user_id, title, amount, category)
      VALUES (${user_id}, ${title}, ${amount}, ${category})
      RETURNING *
    `;

    res.status(201).json(transaction[0]);
  } catch (error) {
    console.log("Error creating transaction", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export async function deleteTransaction(req, res) {
  try {
    // const { id } = req.params;
    // const result = await sql`
    // DELETE FROM transaction WHERE id = ${id} RETURNING *
    // `;

    // If we passes non-numeric characters
    // Because the id comes from the URL as a string, passing non-numeric characters causes a database error; validating and converting id to a number (and returning a 400 error if it’s not numeric) prevents invalid input and keeps the API safe and stable.
    const id = Number(req.params.id);
    // validate id
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid transaction ID" });
    }
    const result = await sql`
      DELETE FROM transaction WHERE id = ${id} RETURNING *
    `;

    if (result.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    console.log("Error creating the transaction", error);
    res.status(500).json({ message: "Interal server error" });
  }
}

export async function getSummaryByUserId(req, res) {
  try {
    const { userId } = req.params;

    const balanceResult = await sql`
    SELECT COALESCE(SUM(amount), 0) as balance FROM transaction WHERE user_id= ${userId}
    `;
    const incomeResult = await sql`
    SELECT COALESCE(SUM(amount), 0) as income FROM transaction WHERE user_id= ${userId}
    AND amount > 0
    `;
    const expensesResult = await sql`
    SELECT COALESCE(SUM(amount), 0) as expenses FROM transaction WHERE user_id= ${userId}
    AND amount < 0
    `;
    // income + expense- amount> 0 amount<0
    // This query calculates the total expenses for a user: SUM(amount) adds all positive amount values (amount > 0) for the given user_id, and COALESCE(..., 0) makes sure the result is 0 instead of NULL when no matching records exist.

    res.status(200).json({
      balance: balanceResult[0].balance,
      income: incomeResult[0].income,
      expenses: expensesResult[0].expenses,
    });
  } catch (error) {
    console.log("Error creating the summary", error);
    res.status(500).json({ message: "Interal server error" });
  }
}

