// Don't load dotenv in Vercel environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000;
const cookieparsor = require("cookie-parser")   // it is a middleware

const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const blogRouter = require("./routes/blog");
const Blog = require("./models/blog");  // imported , so that i will render it on home page




// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieparsor());                 // it is a middleware
app.use(checkForAuthenticationCookie("token"));      // ye "token" -  "routes/user.js" se arha ha, jha pr aapne name dia ha token 



// this middleware is for showing the user name in the navbar when user is logged in
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});


// this middleware help  to renseer static data in public folder 
//, that express doesnt allow the static data in public 
app.use(express.static(path.resolve("./public")));




// this mongoDB is for the local host for me , it is hardcoded, but we have to use the env verivble  for that , for production and deployement purpose 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log("mongoDB not connected! err:", err);
})



// Set up EJS for local development but handle differently for Vercel
if (process.env.VERCEL_ENVIRONMENT === undefined) {
    // Local environment
    app.set("view engine", "ejs");
    app.set("views", "./views");
} else {
    // Vercel environment - we'll handle rendering differently
    const path = require('path');
    app.set("view engine", "ejs");
    app.set("views", path.resolve(__dirname, "views"));
}





// Use the user routes
app.use("/user", userRouter);

//use the blog routes
app.use("/blog", blogRouter);


app.get("/", async (req, res) => {
    try {
        const allBlogs = await Blog.find({});
        // For Vercel serverless, send JSON response instead of rendering EJS
        res.json({
            message: "Server is running 🚀",
            user: req.user,
            blogs: allBlogs,
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})



// Export app for Vercel serverless functions
module.exports = app;