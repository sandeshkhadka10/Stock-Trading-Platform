const express = require("express");
const {Signup,Login,Logout} = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = express.Router();

router.post("/signup",Signup);
router.post("/login",Login);
router.get("/logout",Logout);
router.get("/user",userVerification);

module.exports = router;