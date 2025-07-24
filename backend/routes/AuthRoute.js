const express = require("express");
const {Signup,Login,Logout} = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const {validateSignup,validateLogin} = require("../middlewares/ValidationMiddleware");
const router = express.Router();

router.post("/signup",validateSignup,Signup);
router.post("/login",validateLogin,Login);
router.get("/logout",Logout);
router.get("/user",userVerification,(req,res)=>{
    res.json({status:true, existingUser:req.user});
});

module.exports = router;