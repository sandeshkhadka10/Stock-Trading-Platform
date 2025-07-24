const ExpressError = require("../util/ExpressError");
const {usersSignupSchema,usersLoginSchema,newOrdersSchema} = require("../schema");

module.exports.validateSignup = (req,res,next) => {
    let {error} = usersSignupSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.validateLogin = (req,res,next) => {
    let {error} = usersLoginSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.validateOrder = (req,res,next) => {
    let {error} = newOrdersSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}