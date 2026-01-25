const express = require("express");

const router = express.Router();


router.get("/add-new", (res, req) => {
    return res.render("addBlog", {
        user: res.user,
    })
})

module.exports = router;
