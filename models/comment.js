const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "blog",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }
},{timestamps:true});




const comments = mongoose.model("comments", commentSchema);

module.exports = comments;
