const mongoose = require("mongoose");
const crypto = require("crypto");  // this used  for the hashing of the password 

const { createTokenForUser,
    validateToken } = require("../services/authentication")

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
        default: '/images/default_profile_image.jpg',
    },

    type: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
}, { timestamps: true })


//whenever i create the password of a user ,then
//it hashed it , so before saving the password of the user we have to hashed it 
userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    try {
        const salt = randomBytes(16).toString();       // this is a random string, just used as (secret) key 
        const hashedPassword = createHmac('sha256', salt)   // this creates the hashing of th password 
            .update(user.password)
            .digest("hex");

        this.salt = salt;         // salt is hashed, and the password actually converts into a number, so at the time of signup , the salt get another hashed, if the hashed match with any other existing hash then it confirms the existance of the user, and we login
        this.password = hashedPassword;


    }
    catch (err) {
        return err;
    }
});



// to cross-check user exist in the DB, during Login
userSchema.static("matchPasswordandGenerateToken", async function (email, password) {

    const user = await this.findOne({ email });

    if (!user) throw new Error("User not found");


    const salt = user.salt;   // phle se present ha , jo user ka salt
    const hashedPassword = user.password;   // phle se present ha , jo user ka password ha hashed form main


    const userProvidedhash = createHmac('sha256', salt)
        .update(password)
        .digest("hex");

    if (userProvidedhash != hashedPassword) throw new Error("Incrorrect password");

    const token = createTokenForUser(user)

    return token;

})

const User = mongoose.model("user", userSchema);  




module.exports = User;