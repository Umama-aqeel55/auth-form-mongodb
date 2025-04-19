# 🔐 MERN Authentication App

A modern and responsive **Sign Up / Login** application built with the **MERN stack (MongoDB, Express, React, Node.js)**. This app allows users to register and log in securely. Form validations and SweetAlert2 enhance the user experience.

---

## 📌 Features

- ✅ User registration with name, email, and password
- ✅ User login with email and password
- ✅ Real-time form validation
- ✅ SweetAlert2 notifications for success/failure
- ✅ Switch between Signup and Login
- ✅ Clean and responsive UI using custom CSS
- ✅ MongoDB integration using Mongoose

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Alerts |
|----------|---------|----------|--------|
| React    | Node.js (Express) | MongoDB (Mongoose) | SweetAlert2 |

---

## 📁 Project Structure
mern-auth-form/
├── backend/
│   ├── models/
│   │   └── user.js           # Mongoose schema
│   ├── routes/
│   │   └── auth.js           # Auth routes (signup/login)
│   ├── .env                  # Environment variables (ignored)
│   ├── server.js             # Express server entry point
│   └── package.json          # Backend dependencies
│
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML base file
│   ├── src/
│   │   ├── components/
│   │   │   ├── SignupForm.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── AuthForm.jsx  # Handles form switching
│   │   │   └── Auth.css      # Custom form styling
│   │   └── App.jsx           # Main component
│   └── package.json          # Frontend dependencies
│
├── .gitignore                # Ignored files (node_modules, .env etc.)
├── README.md                 # Project documentation

---

## 🚀 Getting Started

### 🖥️ Backend Setup
cd backend
npm install
- Create a .env file in the backend/ directory:
- MONGO_URI=your_mongodb_connection_string
- PORT=5000
- Start the backend server:
- npm run dev
 ---

  ### 🌐 Frontend Setup
  - cd frontend
  - npm install
  - npm start
  - Visit: http://localhost:3000

 ---
 
  ### 💡 Future Improvements
  - Add JWT authentication
  - Add password hashing (bcrypt)
  - Add logout & protected routes
  - Connect to real email verification
  - Deploy to Vercel / Render

 
 
    ### 🙋‍♀️ Author
    ## Umama Aqeel
    -Frontend Developer | Passionate about clean UI and functional apps ✨
    
    ##📄 License
    -This project is open source and free to use.
