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
module.exports.ordersSchema = Joi.object({
    name: Joi.string().required(),
    qty: Joi.number().min(1).required(),
    price: Joi.number().required(),
    model:Joi.string().required()
});

// for edit of orders
module.exports.editOrdersSchema = Joi.object({
    qty: Joi.number().min(1).required(),
    price: Joi.number().min(0.01).required(),
});
