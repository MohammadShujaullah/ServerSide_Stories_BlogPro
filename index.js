const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;
const cookieparsor = require("cookie-parser")   // it is a middleware

const mongoose = require("mongoose");

const userRouter = require("./routes/user");
const { checkForAuthenticationCookie } = require("./middleware/authentication");

const blogRouter=require("./routes/blog");




// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieparsor());                 // it is a middleware
app.use(checkForAuthenticationCookie("token"))      // ye "token" -  "routes/user.js" se arha ha, jha pr aapne name dia ha token 


mongoose.connect("mongodb://127.0.0.1:27017/Serversidestories").then(console.log("MongoDB connected successfully")).catch((err) => {
    console.log("mongoDB not connected! err:", err);
})



// SO for server side rendering we use EJS template engine
// EJS -> Embedded JavaScript Templating    
app.set("view engine", "ejs");

app.set("views", "./views");



// Use the user routes
app.use("/user", userRouter);

//use the blog routes
app.use("/blog",blogRouter);


app.get("/", (req, res) => {
    return res.render("home", {
        user: req.user,
    });
})

 

app.listen(PORT, () => {
    console.log("server is running on the port ", PORT);

})