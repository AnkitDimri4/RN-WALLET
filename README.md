
---
# RN-WALLET 

RN-WALLET is a full-stack **expense tracking application** consisting of a **React Native (Expo) mobile app** and a **Node.js + Express backend**.  
The project focuses on real-world authentication, API integration, clean architecture, and **ML-based transaction categorization**.

---
## Demo Video
**Before ML integration:**
* Transactions required manual category selection
* Auto-categorization unavailable
  
https://github.com/user-attachments/assets/62a3e6ea-94c2-4926-b9bd-27649c6360b8

**After ML integration:**
* Transactions automatically assigned a category if not selected
* ML service fallback ensures robust assignment for unknown inputs
* Real-time transaction creation and backend rendering

https://github.com/user-attachments/assets/a498f09c-a84a-4cfe-af4f-e101835fdd42


---

## Mobile App (Expo)

The mobile app is built using **Expo Router** and **Clerk authentication**.

**Key highlights:**
- Email + OTP authentication (Clerk)
- Secure session storage
- Transaction dashboard (Income, Expense, Balance)
-  **Add transaction with title, amount, and optional category**  
  - If the category is not selected, the **ML service automatically predicts the category** based on the title.
- Custom hooks for API interaction
- Android & iOS support

**Tech stack:**
- React Native
- Expo & Expo Router
- Clerk Expo
- JavaScript (ES6+)

    Folder: `mobile/`  
➡️ Detailed setup is available inside `mobile/README.md`

---

## Backend (API Server)

The backend provides REST APIs for managing transactions and summaries.

**Key highlights:**
- Express.js server
- PostgreSQL (Neon) database
- Redis (Upstash) rate limiting
- Clean MVC-style architecture
- Clerk-based user identification
-  **ML service integration**: If the transaction category is not provided, the backend calls the **ML API** to predict the category automatically.  
  - Includes fallback logic for unknown or invalid titles.
  - In-memory caching reduces repeated ML calls.
    
**Tech stack:**
- Node.js
- Express.js
- PostgreSQL (Neon)
- Redis (Upstash)

    Folder: `backend/`  
➡️ Detailed setup is available inside `backend/README.md`

---

## Project Structure

```

RN-WALLET/
├── backend/     # Express + PostgreSQL API
├── mobile/      # Expo React Native App
├── ml-service
├── README.md    # Project overview
└── LICENSE

```

---

##  Getting Started

Each folder (`backend` and `mobile`) has its **own README** with setup instructions.  
Clone the repo and follow the respective README based on what you want to run.

**Important notes regarding ML service:**
- The ML service is hosted separately and connected via an **environment variable (`ML_API_URL`)**.
- Transactions without categories will **automatically get categorized** by the ML service.
- Fallback logic ensures **“Other”** is assigned if prediction fails.


---

## Author

**Ankit Dimri**  
📍 Dehradun, India  

<img width="31" height="36" alt="image" src="https://github.com/user-attachments/assets/688ecd8d-44e4-4da7-ab4c-678e021ba95f" /> [GitHub](https://github.com/AnkitDimri4)
<img width="28" height="36" alt="image" src="https://github.com/user-attachments/assets/82e50c6e-5619-4c7c-b763-ccfba890b500" /> [LinkedIn](https://linkedin.com/in/ankit-dimri-a6ab98263)
<img width="55" height="55" alt="image" src="https://github.com/user-attachments/assets/0519c35c-0e2e-4bba-be91-cceb69e077b8" />[LeetCode](https://leetcode.com/u/user4612MW/)

---

## Note

This project demonstrates **modern mobile + backend development**, secure authentication, scalable API design, and **intelligent transaction categorization using an ML service**.


---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 

---

