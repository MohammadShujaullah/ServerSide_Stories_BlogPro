# 📚 ServerSide Stories

**ServerSide Stories** is a beautifully designed, full-stack server-side rendered blog application built using **Node.js, Express, EJS, and MongoDB**.  
It allows users to create, manage, and explore stories with an elegant, classy interface while demonstrating real-world backend concepts like authentication, database operations, and MVC architecture.

---

## ✨ Features

- ✍️ **Create & Publish Blogs** - Write and share your stories with cover images
- 💬 **Comments System** - Engage with readers through comments
- 🔐 **User Authentication** - Secure JWT-based login/signup system
- 🎨 **Elegant UI Design** - Premium typography, gradients, and smooth animations
- 🧩 **Server-Side Rendering** - Fast page loads using **EJS**
- 🌐 **Cloud Database** - MongoDB Atlas for scalable data storage
- 📂 **Clean MVC Architecture** - Well-organized, maintainable codebase
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

---

## 📸 Screenshots

### Home Page
<img src="public/images/features/Screenshot 2026-03-09 234131.png" alt="Home Page" width="650"/>

### Blog Details & Comments
<img src="public/images/features/blogg itself.png" alt="Blog Details" width="650"/>

<img src="public/images/features/commets2 always.png" alt="Comments Feature" width="650"/>

<img src="public/images/features/Screenshot 2026-03-10 001854.png" alt="Additional Feature" width="650"/>

### User Interface
<img src="public/images/features/Screenshot 2026-03-09 234506.png" alt="User Interface" width="650"/>

<img src="public/images/features/Screenshot 2026-03-09 234521.png" alt="Add Blog Interface" width="650"/>

<img src="public/images/features/Screenshot 2026-03-09 234612.png" alt="Authentication" width="650"/>

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
```
ServerSide Stories_BlogPro/
│
├── controllers/        # Route controllers
├── middleware/         # Authentication middleware
├── models/            # Mongoose schemas (User, Blog, Comment)
├── routes/            # Express routes (user, blog)
├── services/          # JWT authentication service
├── views/             # EJS templates
│   ├── partials/      # Reusable components (navbar, header)
│   ├── home.ejs
│   ├── blog.ejs
│   ├── addBlog.ejs
│   ├── signin.ejs
│   └── signup.ejs
├── public/            # Static assets
│   ├── css/           # Custom theme stylesheet
│   ├── images/        # Images and uploads
│   └── uploads/       # User-uploaded content
├── index.js           # Entry point
├── .env               # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/Serversidestories?retryWrites=true&w=majority
PORT=8000
JWT_SECRET=your_secret_key_here
```

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/ServerSide-Stories-BlogPro.git

# Navigate to project directory
cd ServerSide-Stories-BlogPro

# Install dependencies
npm install

# Start the server
npm start
```

Open in browser: **http://localhost:8000**

---

## 🎯 Key Learning Concepts

This project demonstrates:
- **MVC Architecture** - Separation of concerns with Models, Views, and Controllers
- **Authentication & Authorization** - JWT-based secure user sessions
- **RESTful API Design** - Clean routing and HTTP methods
- **Database Modeling** - Mongoose schemas and relationships
- **Server-Side Rendering** - EJS templating for dynamic HTML
- **File Uploads** - Multer for handling blog cover images
- **Frontend Styling** - Custom CSS with modern design principles

---

## 👨‍💻 Author

**Md Shuja Ullah**

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/your-username/ServerSide-Stories-BlogPro/issues).

---

**Made with ❤️ using Node.js and EJS**
