

---


# RN-WALLET ML Service 

This repository contains the Machine Learning microservice for **RN-WALLET**.  
It uses **FastAPI** and **NLP** to automatically predict transaction categories based on text input.

The service is designed to run **independently** and be consumed by a Node.js backend via REST API.

---

## Features

- NLP-based transaction category prediction
- FastAPI REST API
- Pre-trained ML model using `scikit-learn`
- Swagger UI for easy testing
- Production-ready for deployment on Render

---

## Project Structure

```

ml-service/
├── app.py                # FastAPI application
├── train.py              # Model training script
├── model.joblib          # Trained ML model
├── vectorizer.joblib     # Text vectorizer
├── requirements.txt      # Python dependencies

````

## System Architecture

Mobile App (Expo / React Native)
        |
        v
Node.js Backend (Auth, DB, Business Logic)
        |
        v
ML Microservice (FastAPI + NLP Model)


---

## Tech Stack

- Python
- FastAPI
- Scikit-learn
- Joblib
- Uvicorn

---

## Model Overview

- **Task:** Transaction category classification
- **Input:** Transaction text (string)
- **Output:** Predicted category (string)
- **Approach:** NLP + supervised learning

---

## Installation (Local Setup)

### 1️ Create virtual environment (recommended)

```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
````

---

### 2️ Install dependencies

```bash
pip install -r requirements.txt
```

---

## ▶ Run the ML API

```bash
uvicorn app:app --reload
```

The service will start at:

```
http://localhost:8000
```

---

## API Documentation (Swagger)

Open in browser:

```
http://localhost:8000/docs
```

---

## API Endpoints

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "ok"
}
```

---

### Predict Transaction Category

```
POST /predict-category
```

**Request Body**

```json
{
  "text": "Buy groceries from supermarket"
}
```

**Response**

```json
{
  "category": "Food"
}
```

---

##  Usage with Backend

This service is consumed by the Node.js backend using an environment variable:

```env
ML_API_URL=http://localhost:8000/predict-category
```

After deployment:

```env
ML_API_URL=https://<render-service-name>.onrender.com/predict-category
```

---

##  Deployment (Render)

* Runtime: **Python**
* Build Command:

```bash
pip install -r requirements.txt
```

* Start Command:

```bash
uvicorn app:app --host 0.0.0.0 --port 10000
```

---

## Model Training (Optional)

To retrain the model:

```bash
python train.py
```

This will regenerate:

* `model.joblib`
* `vectorizer.joblib`

---

## Production Notes

* Stateless ML service
* Backend handles authentication & persistence
* Scales independently from frontend/backend
* Clean microservice architecture

---

## 📄 License

MIT License



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

This ML microservice demonstrates **real-world NLP-based transaction classification, API integration with FastAPI**, and **scalable microservice design** for mobile and web applications.


---

<div align="center">
    Created by <b>Ankit Dimri</b>  
    © 2026
</div> 


--- 
