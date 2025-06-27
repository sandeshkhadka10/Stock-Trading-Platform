require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_KEY,{
        expiresIn: 3 * 24 * 60 * 60 // these token expires in 3 days
    });
};

/*
here we are creating JWT Token which is used to
identify and authenticate a user for login system
*/