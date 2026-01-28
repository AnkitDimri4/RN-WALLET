# ml-service/train.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

# -----------------------------
# Expanded training data with typos, abbreviations, and variations
# -----------------------------
data = {
    "text": [
        # Food & Drinks
        "Zomato order", "Zomtao order", "Swiggy food", "Swiggy order", "Dominos pizza",
        "Burger King", "McDonalds meal", "Starbucks coffee", "Coffee shop", "Dining out",
        "Grocery store", "Vegetable market", "Pizza", "Burger", "Restaurant", "Cafe latte",
        "Fast food", "Dinner", "Lunch", "Breakfast",
        
        # Shopping
        "Amazon order", "Flipkart purchase", "Online shopping", "Clothes shopping", "Electronics purchase",
          "Mall shopping", "Shoe store", "Fashion store",

        # Transportation
        "Uber ride", "Uber cab", "Ola cab", "Flight ticket", "Bus fare", "Train ticket",
        "Taxi fare", "Cab fare", "Metro ride", "Transport payment", "Air ticket",
        "Bus ticket", "Train pass", "Ride share", "Car rental",

        # Entertainment
        "Netflix subscription", "Netflx subscription", "Spotify premium", "Movie ticket",
        "Concert ticket", "Theater ticket", "Show ticket", "Event ticket", "Streaming fee",
        "Cinema", "Play ticket", "Game subscription", "Online streaming", "Music subscription",

        # Bills
        "Electricity bill", "Water bill", "Internet bill", "Mobile recharge", "Rent",
        "Gas bill", "Subscription fee", "Monthly charges", "Utility bill", "Phone bill",

        # Income
        "Salary credited", "Bonus received", "Freelance payment", "Cashback received",
        "Dividend", "Income received", "Payment received", "Allowance credited",

        # Health & Fitness
        "Gym membership", "Yoga class", "Doctor visit", "Pharmacy purchase",
        "Medical bills", "Exercise class", "Fitness subscription", "Healthcare",
        "Medicines", "Consultation fee",
        
        # Others
        "Gift purchase", "Donation", "Education fees", "Books purchase", "Charity",
        "Miscellaneous", "Other expenses", "Unknown"
    ],
    "category": [
        # Food & Drinks
        "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks",
        "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks",
        "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks",
        "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks", "Food & Drinks"  # now 20

        # Shopping
        "Shopping","Shopping","Shopping","Shopping", "Shopping","Shopping","Shopping","Shopping",

        # Transportation
        "Transportation", "Transportation", "Transportation", "Transportation", "Transportation",
        "Transportation", "Transportation", "Transportation", "Transportation", "Transportation",
        "Transportation", "Transportation", "Transportation", "Transportation", "Transportation",

        # Entertainment
        "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment",
        "Entertainment", "Entertainment", "Entertainment", "Entertainment", "Entertainment",
        "Entertainment", "Entertainment", "Entertainment", "Entertainment","Entertainment",

        # Bills
        "Bills", "Bills", "Bills", "Bills", "Bills", "Bills", "Bills", "Bills", "Bills", "Bills",

        # Income
        "Income", "Income", "Income", "Income", "Income", "Income", "Income", "Income",

        # Health & Fitness
        "Health & Fitness", "Health & Fitness", "Health & Fitness", "Health & Fitness",
        "Health & Fitness", "Health & Fitness", "Health & Fitness", "Health & Fitness",
        "Health & Fitness", "Health & Fitness",
        
        # Others
        "Other", "Other", "Other", "Other", "Other", "Other", "Other", "Other"
    ]
}

# -----------------------------
# Check that text and category lists are the same length
# -----------------------------
if len(data["text"]) != len(data["category"]):
    print("Text length:", len(data["text"]))
    print("Category length:", len(data["category"]))
    raise ValueError("Text and category lists must be the same length")

# -----------------------------
# Create DataFrame
# -----------------------------
df = pd.DataFrame(data)

# -----------------------------
# Vectorization with n-grams for generalization
# -----------------------------
vectorizer = TfidfVectorizer(
    lowercase=True,
    stop_words="english",
    ngram_range=(1, 2),  # single words + word pairs
    strip_accents="unicode"
)

X = vectorizer.fit_transform(df["text"])
y = df["category"]

# -----------------------------
# Train model
# -----------------------------
model = MultinomialNB(alpha=0.1)  # smoothing for better generalization
model.fit(X, y)

# -----------------------------
# Save artifacts
# -----------------------------
joblib.dump(model, "model1.joblib")
joblib.dump(vectorizer, "vectorizer1.joblib")

print("Model and vectorizer saved successfully")
