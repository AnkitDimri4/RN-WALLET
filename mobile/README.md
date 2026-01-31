
---

# Expo Transactions App (Clerk Authentication)

A React Native mobile application built with **Expo Router** and **Clerk authentication**, featuring **email OTP sign-up, secure session management, protected routes, an interactive transaction & analytics dashboard with charts, custom hooks, and automatic transaction category suggestions via an ML microservice.**

<div align="center">
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/e76ee7b4-46e9-4977-8991-d185fc11529d" />
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/38662cf4-575c-47d2-b18c-56ab71df604f" />
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/4903a4e4-aaa6-4014-afd1-d7c86af6be0e" />
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/df751f5d-002d-4fb1-87e4-e2cd1282e47f" />
  <img src="https://github.com/user-attachments/assets/ea05544c-3b3d-43fb-9f93-8c1dd8d24851" width="160" />
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/c5af3e64-1c77-45cf-a834-2de4cb299d3b" />
  <img width="160" alt="image" src="https://github.com/user-attachments/assets/c979841e-00ed-4c04-a8bf-799e32202bb4" />
  <img src="https://github.com/user-attachments/assets/ea05544c-3b3d-43fb-9f93-8c1dd8d24851" width="160" />
  <img src="https://github.com/user-attachments/assets/51dd2c44-edfa-483f-9a8f-9dd6173cfbe1" width="160" />
  <img src="https://github.com/user-attachments/assets/7515fad4-d378-48b9-90c1-043b8e73a40a" width="160" />
  <img src="https://github.com/user-attachments/assets/caed3e79-40e7-4cc6-a879-9f5b404b2509" width="160" />
 </div>



---

* **File-based routing** with Expo Router for organized and scalable navigation
* **Clerk authentication** with email + OTP verification for secure login
* **Secure session storage** using `expo-secure-store`
* **Fetch, create, and manage transactions** with custom React hooks
* **Transaction summary dashboard** showing Income, Expenses, and Total Balance
* **Automatic transaction category suggestion** via ML microservice (with optional manual override)
* **Keyboard-aware forms** using `react-native-keyboard-aware-scroll-view` for smooth input experience
* **Pull-to-refresh** and auto-fetch for up-to-date transaction data
* **Analytics Dashboard** with monthly transaction insights
* **Bar, Line, and Pie charts** for income, expenses, balance, and categories
* **Date-based filtering** to analyze spending trends over time
* **Reusable chart components** with consistent styling
* **Responsive UI & UX**, optimized for both Android and iOS

---

## Tech Stack

* ### **Frontend**

  * **React Native** - Cross-platform mobile app development 
  * **Expo** - Fast development, build, and deployment
  * **Expo Router** - File-based navigation
  * **Clerk (Expo SDK)** - Secure user authentication
  
* ### **Analytics & Visualization**
  
  * react-native-chart-kit – Chart rendering
  * react-native-svg – SVG support for charts


* ### **Backend & ML Services**

  * **Node.js & Express.js**
  * **PostgreSQL (Neon)** – Cloud-hosted relational database
  * **Redis (Upstash)** – Caching and session optimization
  * **Clerk Authentication** – Backend auth & JWT verification
  * **ML Microservice** – Auto expense category prediction
  * **Render** – Backend & ML services deployment

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
|   |   ├── analytics.jsx
│   │   ├── index.jsx
│   │   └── create.jsx
│   │
│   ├── about.jsx
│   └── _layout.jsx
│
├── components/
│   ├── charts/
│   │   ├── ExpenseLineChart.jsx
│   │   ├── IncomeExpenseBar.jsx
│   │   └── CategoryPieChart.jsx
│   ├── filters/
│   │   └── MonthFilter.jsx
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
|       ├── analytics.styles.js
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
* Includes navigation to the Analytics screen from the main dashboard.

### UI & UX

* Clean and modern UI design
* Consistent styling with shared theme and colors
* Responsive and performance-optimized layout
* The app also includes a dedicated Analytics screen with chart-based financial insights for better decision-making.

---

### Chart Dependencies

```bash
npm install react-native-chart-kit react-native-svg
```

Used for rendering **Bar, Line, and Pie charts** in the Analytics dashboard.

---

### Analytics Navigation Flow

```text
Button Click
     ↓
router.push("/analytics")
     ↓
Expo Router resolves route:
app/(root)/analytics.jsx
     ↓
Authentication check via (root)/_layout.jsx
     ↓
Analytics screen renders
```
This flow makes sure **protected routing**, smooth navigation, and consistent screen rendering using Expo Router.



## 📊 Analytics Dashboard

The Analytics screen provides visual insights into user spending behavior using interactive charts. Users can filter transactions by month and view income vs expenses, balance trends, and category-wise spending distribution through reusable and well-structured chart components. All analytics UI follows the shared theme defined in `colors.js` and `analytics.styles.js` for design consistency.

  * Custom Analytics Engine – Transaction filtering and aggregation
  * Bar, Line & Pie Charts – Income, expense, balance, and category insights
  * Monthly Filters – Trend analysis and expense tracking


https://github.com/user-attachments/assets/5fa62d59-626b-4da3-b589-7df8360c5937

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
