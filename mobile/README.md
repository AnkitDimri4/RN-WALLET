

---

# 📱 Expo Transactions App (Clerk Authentication)

A React Native mobile application built using **Expo Router** with **Clerk authentication**, featuring email OTP sign-up, protected routes, and a transaction dashboard powered by custom hooks.

---

##  Features

* 📂 File-based routing using **Expo Router**
* 🔐 Authentication with **Clerk (Email + OTP verification)**
* 🔑 Secure session storage using **expo-secure-store**
* 🧾 Fetch & manage transactions via custom hooks
* 📊 Transaction summary (Income, Expenses, Balance)
* ⌨️ Keyboard-safe forms using **react-native-keyboard-aware-scroll-view**
* 📱 Android & iOS compatible

---

## 🛠️ Tech Stack

* **React Native**
* **Expo**
* **Expo Router**
* **Clerk Expo**
* **Express.js (Backend)**
* **MongoDB**
* **JavaScript (ES6+)**

---

##  Project Structure

```text
app/
 ├── (auth)/
 │    ├── sign-in.jsx
 │    └── sign-up.jsx
 ├── index.tsx
 ├── about.jsx
 └── _layout.tsx

hooks/
 └── useTransactions.js

assets/
 ├── images/
 └── styles/

constants/
 └── colors.js

backend/
 ├── routes/
 │    └── transactionsRoute.js
 ├── controllers/
 ├── config/
 └── server.js
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

## Backend API Endpoints

```http
GET    /api/transactions/:userId
GET    /api/transactions/summary/:userId
POST   /api/transactions
DELETE /api/transactions/:id
```

⚠️ **Android Emulator API Base URL**

```js
http://<>:5001/api/transactions
```

---

##  Learn More

* [Expo Documentation](https://docs.expo.dev)
* [Expo Router](https://docs.expo.dev/router/introduction/)
* [Clerk Expo Docs](https://clerk.com/docs/expo)

---

## 👨‍💻 Author

**Ankit Dimri**
📍 Dehradun, India
🔗 GitHub: [https://github.com/AnkitDimri4](https://github.com/AnkitDimri4)
🔗 LinkedIn: [https://linkedin.com/in/ankit-dimri-a6ab98263](https://linkedin.com/in/ankit-dimri-a6ab98263)

---

## ⭐ Final Note

This project demonstrates **real-world authentication, API integration, and mobile UX handling** using modern Expo tooling. 

---
