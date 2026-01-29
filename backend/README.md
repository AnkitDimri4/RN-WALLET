
---

# RN-WALLET Backend

This repository contains the **backend service** for the RN-WALLET expense tracker application. It is built using **Node.js and Express**, with **PostgreSQL (Neon)** as the database, **Redis (Upstash)** for rate limiting, and an integrated **ML microservice** for **automatic transaction category prediction**.

---

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL (Neon Serverless)**
* **Redis (Upstash)** – Rate Limiting
* **FastAPI (Python)** – ML Microservice
* **Scikit-learn** – NLP-based category prediction
* **Clerk** – Authentication
* **dotenv** – Environment Variables
* **nodemon** – Development Server
* **Cron Jobs** – Background & scheduled tasks

---

## Project Structure

```bash
backend/
├── src/
│   ├── config/
│   │   ├── db.js              # Database connection (Neon)
│   │   ├── upstash.js         # Redis rate limiter config
│   │   └── cron.js            # Scheduled background jobs
│   ├── controllers/
│   │   └── transactionsController.js
│   ├── services/
│   │   └── ml.service.js      # ML category prediction integration
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── routes/
│   │   └── transactionsRoute.js
│   └── server.js              # App entry point
├── .env                       # Environment variables (ignored)
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd RN-WALLET/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5001
DATABASE_URL=your_neon_database_url
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# ML Service URL
ML_API_URL=http://localhost:8000/predict-category
```

> ⚠️ **Do not hardcode ML URLs** — always use environment variables.

### 4. Run the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5001
```

---

## ML Service Integration (Auto Category Prediction)

The backend integrates with a **separate FastAPI ML microservice** that predicts transaction categories using **NLP**.

### Flow

1. User creates a transaction
2. Backend sends transaction title to ML service
3. ML model predicts the category
4. If ML fails → keyword-based fallback is applied
5. Category is saved in the database

### Features

* NLP-based prediction using trained ML model
* In-memory caching to reduce repeated ML calls
* Robust keyword fallback for reliability
* Environment-based ML API configuration

---

## API Endpoints

### Transactions

| Method | Endpoint                            | Description                        |
| ------ | ----------------------------------- | ---------------------------------- |
| GET    | `/api/transactions/:userId`         | Get all transactions               |
| POST   | `/api/transactions`                 | Create transaction (auto category) |
| DELETE | `/api/transactions/:id`             | Delete a transaction               |
| GET    | `/api/transactions/summary/:userId` | Get transaction summary            |

---

## Background Jobs (Cron)

* Uses **cron-based scheduling** for automated backend tasks
* Configured in `src/config/cron.js`
* Designed for cleanup, maintenance, or future async jobs

---

## Database

* Uses **raw SQL** with Neon PostgreSQL
* Tables are auto-created on server start
* Designed for small to medium-scale projects

---

## Middleware

* **JSON Parser** – Handles request bodies
* **Rate Limiter** – Prevents API abuse using Redis
* **Custom Middleware** – Easily extendable

---

## Notes

* ML service is deployed separately and accessed via API
* ORM is intentionally avoided to keep setup lightweight
* Designed with scalability, reliability, and modularity in mind

---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 


--- 
