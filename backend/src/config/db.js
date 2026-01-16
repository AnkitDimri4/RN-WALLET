import { neon } from "@neondatabase/serverless";
import "dotenv/config";

export const sql = neon(process.env.DATABASE_URL);


export async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transaction(
    id SERIAL PRIMARY KEY, 
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL, 
    category VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMPTZ

    )`;
    // DECIMAL(10,2) means the column can store a numeric value with up to 10 total digits, out of which 2 digits are after the decimal point (e.g., 12345678.90), making it ideal for storing precise values like money.

    console.log("Database initialized successfully ");
  } catch (error) {
    console.log("Error initializing DB", error);
    process.exit(1); // status code 1 means failure, and 0 means success
  }
}