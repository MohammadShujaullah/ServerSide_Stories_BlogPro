const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    body: {
        type: String,
        require: true,

    }
    ,

    coverImageURL: {
        type: String,
        require: false,

    },
    createdBy: {
        type: Schema.Type.ObjectId,    // this is the mongoose builtIn Id for user
        ref: "user",             // taken the reference form model of user ,model/user.js

    }
}, { timestamps: true })  // this show default time stamps that ehen the user is created


const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
