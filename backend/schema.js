const Joi = require("joi");

// for signup
module.exports.usersSignupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

// for login
module.exports.usersLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

// for orders
module.exports.newOrdersSchema = Joi.object({
    name: Joi.string().required(),
    qty: Joi.number().required().min(1),
    price: Joi.number().required(),
    model:Joi.string().required()
});