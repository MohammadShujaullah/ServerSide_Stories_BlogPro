const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({         // for every schema , mongoose creates the oject id by default
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
