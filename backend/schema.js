const Joi = require("joi");

// for signup
module.exports.usersSignupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

// for login
module.exports.usersLoginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required()
});

// for orders
module.exports.ordersSchema = Joi.object({
    name: Joi.string().required(),
    qty: Joi.number().min(1).required().min(1),
    price: Joi.number().required(),
    model:Joi.string().required()
});

// for edit of orders
module.exports.editOrdersSchema = Joi.object({
    qty: Joi.number().min(1).required().min(1),
    price: Joi.number().min(0.01).required(),
});

// for forget passowrd
module.exports.forgetPasswordSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required()
});

// for reset password
module.exports.resetPasswordSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    resetCode:Joi.string().required(),
    newPassword:Joi.string().required()
});
