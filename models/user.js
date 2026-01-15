const mongoose = require("mongoose");
const crypto = require("crypto");

//randombytes gives use some random number , used as to create secret, and createHmac used for converting the password 
const { createHmac, randomBytes } = crypto;

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        require: true,

    }
    ,
    email: {
        type: String,
        reuqire: true,
        unique: true,
    },

    salt: {
        type: String,
        require: true,
    },

    password: {
        type: String,              // we are doing the password hashing , so we use salt and pepper for this 
        require: true,

    },
    profileImageURL: {
        type: String,
        default: '/images/default_profile_image',
    },

    type: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
}, { timestamps: true })



//whenever i create the password of auser ,then it hashed it 
userSchema.pre('save', function (next) {
    const user = this;
    
    if (!user.isModified("password")) {
        return next();
    }

    try {
        const salt = randomBytes(16).toString();       // this is a random string, just used as secret key 
        const hashedPassword = createHmac('sha256', salt)
            .update(user.password)
            .digest("hex");

        this.salt = salt;
        this.password = hashedPassword;
        
        next();
    } catch (error) {
        next(error); // Pass error to next middleware
    }
});


const User = mongoose.model("user", userSchema);


module.exports = User;