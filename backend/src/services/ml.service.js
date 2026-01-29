
// ML API URL
const ML_API_URL = process.env.ML_API_URL || "http://localhost:8000/predict-category";

// Simple in-memory cache for repeated titles
const categoryCache = {};

// Extended fallback keywords for more robust matching
export const fallbackCategory = (text) => {
  const lower = text.toLowerCase();

if ([
  // Food & Drinks
  "pizza", "burger", "zomato", "zomtao", "swiggy", "dominos", "mcdonalds", "starbucks",
  "coffee", "latte", "cappuccino", "grocery", "vegetable", "fruit", "dining",
  "restaurant", "food", "meal", "snack", "fastfood", "cafeteria", "canteen",
  "takeaway", "delivery", "lunch", "dinner", "breakfast", "brunch", "kfc"
].some(k => lower.includes(k))) return "Food & Drinks";

// Shopping
if ([
  "amazon","flipkart","shopping","order","purchase",
  "mall","store","clothes","fashion","electronics",
  "shoes","bag","online shopping"
].some(k => lower.includes(k)))
  return "Shopping";

if ([
  // Transportation
  "uber", "ola", "cab", "taxi", "bus", "train", "flight", "fare", "ticket",
  "transport", "metro", "subway", "auto", "rickshaw", "bike", "scooter",
  "rail", "plane", "airline", "shuttle", "trip", "commute", "transportation"
].some(k => lower.includes(k))) return "Transportation";

if ([
  // Entertainment
  "netflix","netflx", "spotify", "movie", "concert", "theater", "netflx", "show",
  "music", "game", "gaming", "youtube", "prime video", "hbo", "disney", 
  "ticket", "event", "party", "fun", "movie ticket", "cinema", "subscription"
].some(k => lower.includes(k))) return "Entertainment";

if ([
  // Bills
  "electricity", "water", "mobile", "internet", "rent", "bill", "bills",
  "subscription", "gas", "phone", "broadband", "wifi", "utilities", "property",
  "tax", "insurance", "loan", "mortgage", "charge", "service fee"
].some(k => lower.includes(k))) return "Bills";

if ([
  // Income
  "salary", "bonus", "payment", "dividend", "cashback", "freelance", "income",
  "credited", "refund", "commission", "earnings", "stipend", "grant", "payout",
  "reward", "interest", "profit", "royalty", "reimbursement"
].some(k => lower.includes(k))) return "Income";

if ([
  // Health & Fitness
  "gym", "yoga", "doctor", "medical", "pharmacy", "health", "fitness", "exercise",
  "medic", "hospital", "clinic", "therapy", "physio", "consultation", "checkup",
  "medicine", "vitamins", "supplement", "personal trainer", "healthcare"
].some(k => lower.includes(k))) return "Health & Fitness";

//   Other 
if ([
        "gift", "donate","donation", "fees", "books", "charity",
        "miscellaneous", "other expenses", "unknown"
    ].some(k => lower.includes(k)))
  return "Other";
  
  
};

// Main function to predict category
export const predictCategory = async (text) => {
  // Check cache first
  if (categoryCache[text]) return categoryCache[text];

  try {
    const response = await axios.post(ML_API_URL, { text });
    let category = response.data.category;

    // Fallback if ML fails or returns empty
    category = category || fallbackCategory(text);

    // Normalize capitalization to match frontend CATEGORIES array
    category = category.replace(/\b\w/g, c => c.toUpperCase());

    // Store in cache
    categoryCache[text] = category;

    return category;
  } catch (error) {
    console.log("ML service error, using fallback:", error.message);
    const category = fallbackCategory(text).replace(/\b\w/g, c => c.toUpperCase());
    categoryCache[text] = category;
    return category;
  }
};
