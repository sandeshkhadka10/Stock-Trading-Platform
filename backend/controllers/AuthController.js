const {UsersModel} = require("../model/UsersModel");
const {createSecretToken} = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async(req,res,next) => {
    try{
        const {email,password,username,createdAt} = req.body;
        const existingUser = await UsersModel.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const noneExistingUser = await UsersModel.create({email,password,username,createdAt});
        const token = createSecretToken(noneExistingUser._id);
        res.cookie("token",token,{
            withCredentials: true,
            httpOnly:true,
        });
        res.status(201).json({message:"User signed in successfully", success: true, noneExistingUser});
        next();
    }catch(error){
        console.error(error);
    }
};

module.exports.Login = async(req,res,next) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({mesasge:"All fields are required"});
        }
        const existingUser = await UsersModel.findOne({email});
        if(!existingUser){
            return res.json({message:"Incorrect email or password"});
        }
        const auth = await bcrypt.compare(password,existingUser.password);
        if(!auth){
            return res.json({message:"Incorrect email or password"});
        }
        const token = createSecretToken(existingUser._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly: true
        });
        res.status(201).json({message:"User logged in successfully", success:true});
    }catch(error){
        console.error(error);
    }
};