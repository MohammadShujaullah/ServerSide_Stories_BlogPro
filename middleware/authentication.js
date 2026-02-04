const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];     //cookieName se tokencookieValue nikaal lenge , throught the cookie-parser(installed in index.js) 

        if (!tokenCookieValue) {      // agr tokencookievalue expire ho chuka hoga , then return to next
            return next();
        }
        try {

            const userPayload = validateToken(tokenCookieValue)     // nahi to usemain se aapko , usepayload extract kr na hoga 
            req.user = userPayload;

            res.locals.user = req.user;  // This makes user  ** in ALL views
        } catch (error) { }

        next();

    }
}

module.exports = {
    checkForAuthenticationCookie,
}