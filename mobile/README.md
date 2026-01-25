

---

#  Expo Transactions App (Clerk Authentication)

A React Native mobile application built using **Expo Router** with **Clerk authentication**, featuring email OTP sign-up, protected routes, and a transaction dashboard powered by custom hooks.

---

##  Features

* File-based routing using **Expo Router**
* Authentication with **Clerk (Email + OTP verification)**
* Secure session storage using **expo-secure-store**
* Fetch & manage transactions via custom hooks
* Transaction summary (Income, Expenses, Balance)
* Keyboard-safe forms using **react-native-keyboard-aware-scroll-view**
* 📱 Android & iOS compatible

---

## 🛠️ Tech Stack

- ### **Frontend**
   - React Native
   - Expo
   - Expo Router
   - Clerk (Expo SDK)

- ### **Backend**
    - Node.js
    - Express.js
    - PostgreSQL (Neon)
    - Redis (Upstash)
    - Clerk Authentication

---

##  Project Structure

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
├── backend/
│   ├── routes/
│   │   └── transactionsRoute.js
│   ├── controllers/
│   ├── config/
│   └── server.js
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

##  Transactions Hook

Custom hook for managing transactions after login:

```text
hooks/useTransactions.js
```

Handles:

* Fetch transactions by user ID
* Fetch summary (income, expense, balance)
* Delete transactions
* Loading & error states

---

###  Balance Overview
- Displays **Total Balance**, **Income**, and **Expenses**
- Auto-calculated and formatted values
- Color-coded income and expense indicators

### 📄 Transactions Management
- View recent transactions in a performant `FlatList`
- Category-based icons for better readability
- Swipe-friendly, mobile-optimized UI
- Delete transactions with confirmation dialog

###  Data Refresh
- Pull-to-refresh support for reloading transactions
- Auto-fetch transactions when user logs in

###  Reusable Components
- `BalanceCard` for financial summary
- `TransactionItem` for individual transactions
- `PageLoader` for loading states
- `NoTransactionsFound` empty state UI

###  Navigation
- Seamless navigation using **Expo Router**
- Quick access to “Add Transaction” screen

###  UI & UX
- Clean and modern UI design
- Consistent styling with shared theme and colors
- Responsive and performance-optimized layout

---

## Backend API Endpoints

```http
GET    /api/transactions/:userId
GET    /api/transactions/summary/:userId
POST   /api/transactions
DELETE /api/transactions/:id
```

## Environment Variables

Create a `.env` file in the root directory:
**Android Emulator API Base URL**

```env
EXPO_PUBLIC_API_URL=http://10.0.2.2:5001/api
````

Then use it in code:

```js
export const API_URL = process.env.EXPO_PUBLIC_API_URL;
```

> 🔸 `10.0.2.2` works only for **Android Emulator**
> 🔸 Use your local IP (e.g. `192.168.x.x`) for physical devices
> 🔸 Replace with production URL when deploying

---

##  Learn More

* [Expo Documentation](https://docs.expo.dev)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [Clerk Expo Docs](https://clerk.com/docs/expo)

---

##  Author

**Ankit Dimri**
📍 Dehradun, India
<img width="31" height="38" alt="image" src="https://github.com/user-attachments/assets/688ecd8d-44e4-4da7-ab4c-678e021ba95f" />
 GitHub: [https://github.com/AnkitDimri4](https://github.com/AnkitDimri4) 
<img width="28" height="31" alt="image" src="https://github.com/user-attachments/assets/82e50c6e-5619-4c7c-b763-ccfba890b500" />
LinkedIn: [https://linkedin.com/in/ankit-dimri-a6ab98263](https://linkedin.com/in/ankit-dimri-a6ab98263)

---

## Final Note

This project demonstrates **real-world authentication, API integration, and mobile UX handling** using modern Expo tooling. 


---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 


--- 
