const {UsersModel} = require("../model/UsersModel");
const {createSecretToken} = require("../util/SecretToken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USER,
        password:process.env.EMAIL_PASSWORD
    }
});

module.exports.Signup = async(req,res,next) => {
        const {email,password,username,createdAt} = req.body;
        const existingUser = await UsersModel.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const noneExistingUser = await UsersModel.create({username,email,password,createdAt});
        const token = createSecretToken(noneExistingUser._id);
        res.cookie("token",token,{
            httpOnly:true,
        });
        res.status(201).json({message:"User signed in successfully", success: true, noneExistingUser});
        // next();
};

module.exports.Login = async(req,res,next) => {
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({success:false,mesasge:"All fields are required"});
        }
        const existingUser = await UsersModel.findOne({email});
        if(!existingUser){
            return res.json({success:false,message:"Incorrect email or password"});
        }
        const auth = await bcrypt.compare(password,existingUser.password);
        if(!auth){
            return res.json({success:false,message:"Incorrect email or password"});
        }
        const token = createSecretToken(existingUser._id);
        res.cookie("token",token,{
            httpOnly: true,
        });
        res.status(201).json({success:true,message:"User logged in successfully"});
};

module.exports.Logout = (req,res) => {
    res.clearCookie("token",{
        httpOnly:true,
    });
    res.status(200).json({message:"Logged out successfully"});
};

module.exports.forgetPassword = async(req,res) =>{
    const {email} = req.body;
    const existingUser = await UsersModel.findOne({email});
    if(!existingUser){
        return res.status(404).json({message:"User doesn't exist"});
    }
    const resetCode = Math.floor(10000 + Math.random() * 90000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000);

    existingUser.resetCode = resetCode;
    existingUser.expires = expires;
    await existingUser.save();

    // Email sending
    const mailOptions = {
        from : process.env.EMAIL_USER,
        to: email,
        subject: "Password Reset Code",
        text: `Your password reset code is: ${resetCode}.It will expire in 10 Minutes`,
    }
    try{
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: "Reset code send to your email"});
    }catch(error){
        console.error("Email send error:",error);
        res.status(500).json({message: "Failed to send reset coed"});
    }
}