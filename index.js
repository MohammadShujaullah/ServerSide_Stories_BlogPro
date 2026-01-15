const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;


const mongoose = require("mongoose");

const userRouter = require("./routes/user");



// Middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/Serversidestories").then(console.log("MongoDB connected successfully")).catch((err) => {
    console.log("mongoDB not connected! err:" , err);
})



// SO for server side rendering we use EJS template engine
// EJS -> Embedded JavaScript Templating    
app.set("view engine", "ejs");

app.set("views", "./views");



// Use the user routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
    return res.render("home");
})

app.get("/signup", (req, res) => {
    return res.render("signup");
})

app.listen(PORT, () => {
    console.log("server is running on the port ", PORT);

})