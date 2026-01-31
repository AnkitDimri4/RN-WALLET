
---
# RN-WALLET 

RN-WALLET is a full-stack **expense tracking application** consisting of a **React Native (Expo) mobile app**, a **Node.js + Express backend**, and a dedicated **ML microservice** for automatic transaction categorization.
The project focuses on **real-world authentication**, **clean API architecture**, **custom analytics**, and **ML-driven automation**.


<div align="center">
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/e76ee7b4-46e9-4977-8991-d185fc11529d" />
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/38662cf4-575c-47d2-b18c-56ab71df604f" />
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/4903a4e4-aaa6-4014-afd1-d7c86af6be0e" />
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/df751f5d-002d-4fb1-87e4-e2cd1282e47f" />
  <img src="https://github.com/user-attachments/assets/ea05544c-3b3d-43fb-9f93-8c1dd8d24851" width="140" />
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/c5af3e64-1c77-45cf-a834-2de4cb299d3b" />
  <img width="140" alt="image" src="https://github.com/user-attachments/assets/c979841e-00ed-4c04-a8bf-799e32202bb4" />
  <img src="https://github.com/user-attachments/assets/ea05544c-3b3d-43fb-9f93-8c1dd8d24851" width="140" />
  <img src="https://github.com/user-attachments/assets/51dd2c44-edfa-483f-9a8f-9dd6173cfbe1" width="140" />
  <img src="https://github.com/user-attachments/assets/7515fad4-d378-48b9-90c1-043b8e73a40a" width="140" />
  <img src="https://github.com/user-attachments/assets/caed3e79-40e7-4cc6-a879-9f5b404b2509" width="140" />
 </div>


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

### After Analytics Integration

https://github.com/user-attachments/assets/5fa62d59-626b-4da3-b589-7df8360c5937



---

## Mobile App (Expo)

The mobile app is built using **Expo Router** and **Clerk authentication**.

### Key Features

* Email + OTP authentication (Clerk)
* Secure session storage
* Transaction dashboard (Income, Expense, Balance)
* **Analytics Dashboard** with charts:

  * Income vs Expense (Bar)
  * Monthly trends (Line)
  * Category-wise spending (Pie)
* **Add transaction with optional category**

  * If not provided, category is predicted via ML service
* Custom hooks for API & state management
* Android & iOS support

### Tech Stack


  * **React Native** - Cross-platform mobile app development 
  * **Expo** - Fast development, build, and deployment
  * **Expo Router** - File-based navigation
  * **Clerk (Expo SDK)** - Secure user authentication

  * ### **Analytics & Visualization**
  
  * react-native-chart-kit – Chart rendering
  * react-native-svg – SVG support for charts

    Folder: `mobile/`  
### ➡️[Detailed Frontend setup & documentation](./mobile/README.md)

---

## Backend (API Server)

The backend exposes REST APIs for transaction management, analytics summaries, and ML integration.

### Key Features

* Express.js REST API
* PostgreSQL (Neon) for persistent storage
* Redis (Upstash) for caching & rate limiting
* Clerk-based user authentication & JWT validation
* **ML Service Integration**

  * Predicts transaction category if not provided
  * Fallback logic assigns `"Other"` if prediction fails
  * Cached results reduce repeated ML calls
* Clean MVC-style architecture

### Tech Stack

  * **Node.js & Express.js**
  * **PostgreSQL (Neon)** – Cloud-hosted relational database
  * **Redis (Upstash)** – Caching and session optimization
  * **Clerk Authentication** – Backend auth & JWT verification
  * **ML Microservice** – Auto expense category prediction
  * **Render** – Backend & ML services deployment

    Folder: `backend/`  
### ➡️ [Detailed setup & documentation](./backend/README.md)

---

```text
## System Architecture

Mobile App (Expo / React Native)
        |
        v
Node.js Backend (Auth, DB, Business Logic)
        |
        v
ML Microservice (FastAPI + NLP Model)
```

---

## ML Tech Stack

- Python
- FastAPI
- Scikit-learn
- Joblib
- Uvicorn

### ➡️[ML Service Documentation](./ml-service/README.md)

---


## 📊 Analytics & Insights

RN-WALLET includes a **custom analytics engine** that transforms raw transaction data into meaningful insights.

### Analytics Capabilities

* Monthly transaction filtering
* Income, expense & balance aggregation
* Category-wise spending analysis
* Chart-based visualization using reusable components

This logic powers the Analytics Dashboard in the mobile app.

---

##  ML Service

A separate ML microservice is responsible for **automatic transaction categorization**.

### Highlights

* Python-based service
* Trained text classification model
* Predicts category from transaction title
* Integrated via backend API

📁 Folder: `ml-service/`

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


This project demonstrates **modern mobile development**, **secure authentication**, **scalable backend design**, **custom analytics**, and **ML-powered automation** in a production-style architecture.  

---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 

---



