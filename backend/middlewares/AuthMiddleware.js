const {UsersModel} = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/*
checks if the user has access to the route by
checking if token match
*/
module.exports.userVerification = (req,res) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({status:false});
    }
    jwt.verify(token, process.env.TOKEN_KEY ,async(err, data) => {
        if(err){
            return res.json({status: false});
        }else{
            const existingUser = await UsersModel.findById(data.id);
            if(existingUser){
                return res.json({status:true, existingUser:existingUser.username});
            }else{
                return res.json({status:false});
            }
        }
    })
};