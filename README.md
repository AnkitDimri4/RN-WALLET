
---
# RN-WALLET 

RN-WALLET is a full-stack **expense tracking application** consisting of a **React Native (Expo) mobile app** and a **Node.js + Express backend**.  
The project focuses on real-world authentication, API integration, and clean architecture.

---

## Mobile App (Expo)

The mobile app is built using **Expo Router** and **Clerk authentication**.

**Key highlights:**
- Email + OTP authentication (Clerk)
- Secure session storage
- Transaction dashboard (Income, Expense, Balance)
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
├── README.md    # Project overview
└── LICENSE

```

---

##  Getting Started

Each folder (`backend` and `mobile`) has its **own README** with setup instructions.  
Clone the repo and follow the respective README based on what you want to run.

---

## Author

**Ankit Dimri**  
📍 Dehradun, India  

<img width="31" height="38" alt="image" src="https://github.com/user-attachments/assets/688ecd8d-44e4-4da7-ab4c-678e021ba95f" /> GitHub: [https://github.com/AnkitDimri4](https://github.com/AnkitDimri4)  <img width="28" height="31" alt="image" src="https://github.com/user-attachments/assets/82e50c6e-5619-4c7c-b763-ccfba890b500" /> LinkedIn: [https://linkedin.com/in/ankit-dimri-a6ab98263](https://linkedin.com/in/ankit-dimri-a6ab98263)

---

## Note

This project demonstrates **modern mobile + backend development**, secure authentication, and scalable API design.

---

