const express = require("express");

const router =express.Router();

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


// router.post("/signin", async (req, res) => {
//     // Signin logic would go here
// })


module.exports = router;
