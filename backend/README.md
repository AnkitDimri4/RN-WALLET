
---

# RN-WALLET Backend

This repository contains the **backend service** for the RN-WALLET expense tracker application. It is built using **Node.js and Express**, with **PostgreSQL (Neon)** as the database, **Redis (Upstash)** for rate limiting, and a clean architecture using **routes, controllers, and middleware**.

---

## Tech Stack

* **Node.js**
* **Express.js**
* **PostgreSQL (Neon Serverless)**
* **Redis (Upstash)** – Rate Limiting
* **Clerk** – Authentication
* **dotenv** – Environment Variables
* **nodemon** – Development Server

---

## Project Structure

```bash
backend/
├── config/
│   ├── db.js              # Database connection (Neon)
│   └── upstash.js         # Redis rate limiter config
├── controllers/
│   └── transactionsController.js
├── middleware/
│   └── rateLimiter.js
├── routes/
│   └── transactionsRoute.js
├── server.js              # App entry point
├── .env                   # Environment variables (ignored)
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone <repo-url>
cd RN-WALLET/backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=5001
DATABASE_URL=your_neon_database_url
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

4. **Run the server**

```bash
npm run dev
```

Server will start at:

```
http://localhost:5001
```

---

## API Endpoints

### Transactions

| Method | Endpoint                            | Description             |
| ------ | ----------------------------------- | ----------------------- |
| GET    | `/api/transactions/:userId`         | Get all transactions    |
| POST   | `/api/transactions`                 | Create a transaction    |
| DELETE | `/api/transactions/:id`             | Delete a transaction    |
| GET    | `/api/transactions/summary/:userId` | Get transaction summary |

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

* ORM is intentionally avoided to keep setup lightweight
* Designed with scalability and maintainability in mind

---
