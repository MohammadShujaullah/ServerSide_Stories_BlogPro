# 📚 ServerSideStories

**ServerSideStories** is a full-stack server-side rendered web application built using **Node.js, Express, EJS, and MongoDB**.  
It allows users to create, manage, and explore stories while learning real-world backend concepts like authentication, database operations, and MVC architecture.

---

## 🚀 Features

- ✍️ Create, read, update, and delete stories
- 🧩 Server-side rendering using **EJS**
- 🔐 Secure backend with **Express & MongoDB**
- 🌐 Cloud database using **MongoDB Atlas**
- 📂 Clean MVC-style project structure
- ⚡ Fast and scalable deployment on **Railway / Render**

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Backend | Node.js, Express.js |
| View Engine | EJS |
| Database | MongoDB Atlas |
| ORM | Mongoose |
| Deployment | Railway / Render |
| Version Control | Git & GitHub |

------------------------------------------------

## 📁 Project Structure
serversidestories/
│
├── views/              # EJS templates
├── public/             # Static files (CSS, JS, images)
├── models/             # Mongoose schemas
├── routes/             # Express routes
├── controllers/        # Route logic
├── index.js            # Entry point
├── package.json
└── README.md
⚙️ Environment Variables
Create a .env file in the root directory and add:

-------------------------------------------------

Run Locally
git clone https://github.com/your-username/serversidestories.git
cd serversidestories
npm install
npm start


Open in browser:
http://localhost:8000

Run Locally:
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/Serversidestories
PORT=3000
NODE_ENV=development
