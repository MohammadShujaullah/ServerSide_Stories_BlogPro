const express = require("express");

const multer = require("multer");
const path = require("path");  // for multer usage


const router = express.Router();

const Blog = require("../models/blog");

const comments = require("../models/comment");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('./public/uploads/'))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`     // originalname is the [property of express ]
        cb(null, fileName);  // cb is callback



    }
})
const upload = multer({ storage: storage })


// for comment purpose
router.post("/comment/:blogId", async (req, res) => {
    await comments.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,

    })

    return res.redirect(`/blog/${req.params.blogId}`)
})



router.post("/", upload.single("coverImage"), async (req, res) => {

    const { title, body } = req.body;

    const blog = await Blog.create({
        title,
        body,
        createdBy: req.user._id,
        coverImageURL: `uploads/${req.file.filename}`,
    })


    return res.redirect(`/blog/${blog._id}`);

})

router.get("/add-new", (req, res) => {
    return res.render("addBlog", {
        user: req.user,
    })
})

router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy")
    const comment = await comments.find({ blogId: req.params.id }).populate("createdBy")  // this"comment" is passes to blog.ejs to show the comments to all user.
  
    return res.render("blog", {
        user: req.user,
        blog,
        comment
    })
})

module.exports = router;
