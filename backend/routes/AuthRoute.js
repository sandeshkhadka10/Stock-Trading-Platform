const express = require("express");
const {Signup,Login,Logout,forgetPassword} = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const {validateSignup,validateLogin} = require("../middlewares/ValidationMiddleware");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync");

router.post("/signup",validateSignup,wrapAsync(Signup));
router.post("/login",validateLogin,wrapAsync(Login));
router.get("/logout",Logout);
router.post("/forgetPassword",forgetPassword);


router.get("/user",userVerification,(req,res)=>{
    res.json({status:true, existingUser:req.user});
});

module.exports = router;