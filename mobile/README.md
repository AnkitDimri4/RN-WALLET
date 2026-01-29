
---

# Expo Transactions App (Clerk Authentication)

A React Native mobile application built with **Expo Router** and **Clerk authentication**, featuring **email OTP sign-up, secure session management, protected routes, an interactive transaction dashboard powered by custom hooks, and automatic transaction category suggestions via an ML microservice.**

---

* **File-based routing** with Expo Router for organized and scalable navigation
* **Clerk authentication** with email + OTP verification for secure login
* **Secure session storage** using `expo-secure-store`
* **Fetch, create, and manage transactions** with custom React hooks
* **Transaction summary dashboard** showing Income, Expenses, and Total Balance
* **Automatic transaction category suggestion** via ML microservice (with optional manual override)
* **Keyboard-aware forms** using `react-native-keyboard-aware-scroll-view` for smooth input experience
* **Pull-to-refresh** and auto-fetch for up-to-date transaction data
* **Responsive UI & UX**, optimized for both Android and iOS

---

## Tech Stack

* ### **Frontend**

  * React Native
  * Expo
  * Expo Router
  * Clerk (Expo SDK)

* ### **Backend**

  * Node.js
  * Express.js
  * PostgreSQL (Neon)
  * Redis (Upstash)
  * Clerk Authentication
  * **ML Microservice for category prediction**

---

## Project Structure

```text
mobile/
├── app/
│   ├── (auth)/
│   │   ├── _layout.jsx
│   │   ├── sign-in.jsx
│   │   └── sign-up.jsx
│   │
│   ├── (root)/
│   │   ├── _layout.jsx
│   │   ├── index.jsx
│   │   └── create.jsx
│   │
│   ├── about.jsx
│   └── _layout.jsx
│
├── components/
│   ├── BalanceCard.jsx
│   ├── NoTransactionsFound.jsx
│   ├── PageLoader.jsx
│   ├── SafeScreen.jsx
│   ├── SignOutButton.js
│   └── TransactionItem.jsx
│
├── hooks/
│   └── useTransactions.js
│
├── assets/
│   ├── fonts/
│   ├── images/
│   └── styles/
│       ├── auth.styles.js
│       ├── create.styles.js
│       └── home.styles.js
├── lib/
│   └── utils.js
│
├── constants/
│   ├── colors.js
│   └── api.js
│

backend/
├── routes/
│   └── transactionsRoute.js
├── services/
│   └── ml.service.js   
├── controllers/
├── config/
└── server.js

ml-service/
├── app.py                # FastAPI application
├── train.py              # Model training script
├── model.joblib          # Trained ML model
├── vectorizer.joblib     # Text vectorizer
├── requirements.txt      # Python dependencies
```

---

## Installation & Setup

### 1️ Create Expo App

```bash
npx create-expo-app@latest .
```

### 2️ Install Dependencies

```bash
npm install
npm install @clerk/clerk-expo
npm install expo-secure-store
npm install react-native-keyboard-aware-scroll-view
```

### 3️ Clear Cache (Recommended)

```bash
npx expo start -c
```

---

## ▶ Run the App

```bash
npx expo start
```

You can open the app in:

* Android Emulator
* iOS Simulator
* Expo Go

> 🔸 Make sure the backend server is running at `API_URL` before starting the app

---

## Clerk Authentication Setup

* Email & Password sign-up
* OTP email verification
* Secure session handling
* Protected routes using `<SignedIn />` and `<SignedOut />`

**Note:** Development keys are used. Do not deploy to production with dev keys.

---

## Keyboard Handling

To prevent the keyboard from covering input fields:

```bash
npm install react-native-keyboard-aware-scroll-view
```

Used in authentication screens to improve UX.

---

## Transactions Hook

Custom hook for managing transactions after login:

```text
hooks/useTransactions.js
```

Handles:

* Fetch transactions by user ID
* Fetch summary (income, expense, balance)
* Delete transactions
* Loading & error states
* Automatic category suggestion from ML microservice if no category selected

---

### Balance Overview

* Displays **Total Balance**, **Income**, and **Expenses**
* Auto-calculated and formatted values
* Color-coded income and expense indicators

### 📄 Transactions Management

* View recent transactions in a performant `FlatList`
* Category-based icons for better readability
* Includes new category: **Health & Fitness**
* Swipe-friendly, mobile-optimized UI
* Delete transactions with confirmation dialog

### Data Refresh

* Pull-to-refresh available for transaction list
* Auto-fetch transactions when user logs in

### Reusable Components

* `BalanceCard` for financial summary
* `TransactionItem` for individual transactions
* `PageLoader` for loading states
* `NoTransactionsFound` empty state UI

### Navigation

* Seamless navigation using **Expo Router**
* Quick access to “Add Transaction” screen

### UI & UX

* Clean and modern UI design
* Consistent styling with shared theme and colors
* Responsive and performance-optimized layout

---

## Backend API Endpoints

```http
GET    /api/transactions/:userId
GET    /api/transactions/summary/:userId
POST   /api/transactions
DELETE /api/transactions/:id
```

---

## Environment Variables

Create a `.env` file in the root directory:

**Android Emulator API Base URL**

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:5001/api
```

**ML Service URL**

```env
EXPO_PUBLIC_ML_API_URL=http://<your-ml-service-url>/predict-category
```

Then use it in code:

```js
export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const ML_API_URL = process.env.EXPO_PUBLIC_ML_API_URL;
```

> 🔸 `10.0.2.2` works only for **Android Emulator**
> 🔸 Use your local IP (e.g. `192.168.x.x`) for physical devices
> 🔸 Replace with production URLs when deploying

---

## Learn More

* [Expo Documentation](https://docs.expo.dev)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [Clerk Expo Docs](https://clerk.com/docs/expo)

---

## Author

**Ankit Dimri**
📍 Dehradun, India
<img width="31" height="36" alt="image" src="https://github.com/user-attachments/assets/688ecd8d-44e4-4da7-ab4c-678e021ba95f" /> [GitHub](https://github.com/AnkitDimri4)
<img width="28" height="36" alt="image" src="https://github.com/user-attachments/assets/82e50c6e-5619-4c7c-b763-ccfba890b500" /> [LinkedIn](https://linkedin.com/in/ankit-dimri-a6ab98263)
<img width="55" height="55" alt="image" src="https://github.com/user-attachments/assets/0519c35c-0e2e-4bba-be91-cceb69e077b8" />[LeetCode](https://leetcode.com/u/user4612MW/)


---

## Final Note

This project demonstrates **real-world authentication, API integration, ML-based category prediction, and mobile UX handling** using modern Expo tooling.

---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 

---
