const JWT = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;


/**the server issues a JWT to the client, allowing the 
 * user to remain logged in while navigating between secure sections
 *  without re-entering credentials. */

function createTokenForUser(user) {

    const payload = {
        _id: user._id,
        email: user.email,
        FullName: user.FullName, // now full name is included , to show when logged in
        profileImageURL: user.profileImageURL,
        role: user.role,

    }

    const token = JWT.sign(payload, secret);

    return token;

}

function validateToken(token) {

    const payload = JWT.verify(token, secret);          // payload is the model data of the user
    return payload;

}

module.exports = {
    createTokenForUser,
    validateToken,
}