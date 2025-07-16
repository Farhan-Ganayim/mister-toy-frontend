# Mister Toy 🧸 – Frontend

A toy marketplace **frontend** built with **React** as part of the full-stack course at **Coding Academy**.  
This repo connects to a backend server for full CRUD functionality and user authentication.

---

## 🔐 Authentication – Try the App!

To test the full functionality of the app (adding, editing, deleting toys), you can log in:

**Admin credentials (for full access):**

- Username: `admin`  
- Password: `aaa`

Or sign up with any username/password to create a user with limited access.

---

## 🔗 Live App

👉 [https://mistertoy-backend-2r38.onrender.com](https://mistertoy-backend-2r38.onrender.com)

---

## ▶️ Run the App 

npm run dev

Make sure you're also running the Mister Toy backend repo: 
https://github.com/Farhan-Ganayim/mister--Toy-backend

with the same command: 
```bash
npm run dev

``` 
## 📦 Tech Stack

### Frontend:

- React
- React Router
- Axios
- SCSS

### Backend (see backend repo):

- Node.js
- Express
- MongoDB
- RESTful API
- Middleware

---

## 🚀 Features

- Full CRUD for toys
- Authentication & Authorization
- Admin-only access for add/edit/delete
- Filtering, Sorting, and Searching
- Chart stats by toy labels
- Modular code structure

---

## ▶️ Run the App Locally

npm install

---

npm run dev

Then open:
👉 http://localhost:5173

## ⚡ Switching Between Local & Backend Modes
By default, the app uses the online backend 
To work with local data using async-storage, follow these steps:

Rename the local service file:

toy.service.local.js ➡️ toy.service.js
Rename or move the backend file out of the way:

toy.service.js ➡️ toy.service.backend.js
(or delete it temporarily)

Restart the frontend:

npm run dev
Now the app will use async-storage and fake data instead of making HTTP calls.

### 🧪 Project Notes
Built during Sprint 3 @ Coding Academy

Backend is hosted separately – check the backend repo for full API implementation

