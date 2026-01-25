const express = require("express");
const bcrypt = require('bcryptjs'); // Make sure to install: npm install bcryptjs

const router = express.Router();

const Users = require("../models/user");



router.get("/signin", (req, res) => {
    return res.render("signin");
})

router.get("/signup", (req, res) => {
    return res.render("signup");
})


router.post("/signup", async (req, res) => {
    const { FullName, email, password } = req.body;


    await Users.create({
        FullName,
        email,
        password,

    });

    return res.redirect("/");


})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await Users.matchPasswordandGenerateToken(email, password);

        console.log("Token", token);

        return res.cookie("token", token).redirect("/");
    }
    catch (error) {
        return res.render("signin", {
            error: "Incorrect email or password"
        });

    }

})

router.get("/logout", (req, res) => {
    try {

        //clearing the JWT cookie
        res.cookie("token", "", { maxAge: 0 });

        // sending just success response
        res.status(200).render("home");


    }
    catch (error) {

        console.log("error in logout controller", error.message);

        res.status(500).json({ error: "Internal server error" })
    }
})





module.exports = router;
