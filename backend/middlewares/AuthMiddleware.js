const {UsersModel} = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/*
checks if the user has access to the route by
checking if token match
*/
module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!req.session.user || req.session.user.token !== token) {
    return res.status(401).json({ status: false, message: "Session expired or invalid" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(403).json({ status: false, message: "Invalid token" });
    }

    const existingUser = await UsersModel.findById(data.id);
    if (!existingUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    req.user = existingUser;
    next();
  });
};

