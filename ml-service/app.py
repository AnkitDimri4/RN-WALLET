# app.py

# -----------------------------
# Imports
# -----------------------------
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

# -----------------------------
# Load ML Model Artifacts
# -----------------------------
model = joblib.load("model1.joblib")
vectorizer = joblib.load("vectorizer1.joblib")

# -----------------------------
# FastAPI App Initialization
# -----------------------------
app = FastAPI(
    title="RN-WALLET ML Service",
    description="Auto transaction category prediction using NLP",
    version="1.0.0"
)

# -----------------------------
# Middleware
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Request Schema
# -----------------------------
class TransactionText(BaseModel):
    text: str

# -----------------------------
# Fallback Keywords
# -----------------------------
fallback_keywords = {
    "Food & Drinks": [
        "pizza", "burger", "zomato", "zomtao","swiggy", "dominos", "coffee", "grocery", 
        "restaurant", "latte", "cappuccino", "fastfood", "cafeteria", "canteen",
        "takeaway", "delivery", "lunch", "dinner", "breakfast", "brunch", "kfc"
    ],
    "Shopping": ["amazon","flipkart","shopping","order","purchase",
                 "mall","store","clothes","fashion","electronics",
                 "shoes","bag","online shopping"],

    "Transportation": [
        "uber", "ola", "cab", "taxi", "bus", "train", "flight", "fare", "ticket",
        "transport", "metro", "subway", "auto", "rickshaw", "bike", "scooter",
        "rail", "plane", "airline", "shuttle", "trip", "commute"
    ],
    "Entertainment": [
        "netflix","netflx", "spotify", "movie", "concert", "theater", "netflx", "show",
        "music", "game", "gaming", "youtube", "prime video", "hbo", "disney",
        "ticket", "event", "party", "fun", "cinema", "subscription"
    ],
    "Bills": [
        "electricity", "water", "mobile", "internet", "rent", "bill", "bills",
        "subscription", "gas", "phone", "broadband", "wifi", "utilities", "property",
        "tax", "insurance", "loan", "mortgage", "charge", "service fee"
    ],
    "Income": [
        "salary", "bonus", "payment", "dividend", "cashback", "freelance", "income",
        "credited", "refund", "commission", "earnings", "stipend", "grant", "payout",
        "reward", "interest", "profit", "royalty", "reimbursement"
    ],
    "Health & Fitness": [
        "gym", "yoga", "doctor", "medical", "pharmacy", "health", "fitness", "exercise",
        "medic", "hospital", "clinic", "therapy", "physio", "consultation", "checkup",
        "medicine", "vitamins", "supplement", "personal trainer", "healthcare"
    ],
    "Other": [
        "gift", "donate", "fees", "books", "charity",
        "miscellaneous", "other expenses", "unknown"
    ]
}

# -----------------------------
# Fallback Function
# -----------------------------
def fallback(text: str) -> str:
    """
    Predict category using keyword matching if ML model fails.
    """
    lower = text.lower()
    for category, keywords in fallback_keywords.items():
        if any(k in lower for k in keywords):
            return category
    return "Other"

# -----------------------------
# Endpoints
# -----------------------------
@app.get("/health")
def health():
    """Health check endpoint."""
    return {"status": "ok"}

@app.post("/predict-category")
def predict_category(payload: TransactionText):
    """
    Predict category using ML model, fallback if prediction fails.
    """
    try:
        X = vectorizer.transform([payload.text])
        prediction = model.predict(X)[0] 
        # prediction = model.predict(X)[0].title()  # Ensure proper capitalization
    except Exception:
        prediction = fallback(payload.text)

    # Fallback if ML returns None or empty
    if not prediction:
        prediction = fallback(payload.text)

    return {"category": prediction}
