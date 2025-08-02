const ExpressError = require("../util/ExpressError");
const {usersSignupSchema,usersLoginSchema,ordersSchema,editOrdersSchema,forgetPasswordSchema,resetPasswordSchema} = require("../schema");

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
    let {error} = ordersSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.validateEditOrder = (req,res,next) => {
    let {error} = editOrdersSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.validateForgetPassword = (req,res,next) => {
    let {error} = forgetPasswordSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.validateResetPassword = (req,res,next) => {
    let {error} = resetPasswordSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}