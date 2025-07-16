# Mister Toy 🧸 – Frontend

This is the **React frontend** for the Mister Toy app – a toy marketplace built as part of my full-stack development course at Coding Academy.

---

## 🔐 Authentication – Try the App!

To test all features (adding, editing, deleting toys), **log in** with:

- **Username:** `admin`  
- **Password:** `aaa`

You can also sign up with any credentials to create a user with limited access.

---

## 🔗 Live App

👉 [Mister Toy – Online](https://mistertoy-backend-2r38.onrender.com)

---

## ⚙️ Tech Stack

### Frontend:
- React
- React Router
- Axios

### Backend (served separately):
- Node.js / Express
- MongoDB (via REST API)

---

## 🚀 Features

- Browse toys with full filtering, sorting, and search
- Login/signup system with session-based authentication
- Admin-only routes for adding/editing/deleting toys
- Chart with toy statistics by label
- Modular route and service structure

---

## 🛠️ Getting Started

### Install dependencies:

```bash
npm install

## ▶️ Run the App Locally

```bash
npm run dev
Then open:
👉 http://localhost:5173

⚡ Switching Between Local & Backend Modes
By default, the app uses the online backend (render.com).
To work with local data using async-storage, follow these steps:

Rename the local service file:

toy.service.local.js ➡️ toy.service.js
Rename or move the backend file out of the way:

toy.service.backend.js ➡️ toy.service.backend.js.bak
(or delete it temporarily)

Restart the frontend:

npm run dev
Now the app will use async-storage and fake data instead of making HTTP calls.

🧪 Project Notes
Built as part of Sprint 3 in Coding Academy

Backend hosted separately – check the backend repo for API code and setup