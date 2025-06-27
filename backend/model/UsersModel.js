const {model} = require("mongoose");
const {UsersSchema} = require("../schemas/UsersSchema");
const UsersModel = new model("Users",UsersSchema);
module.exports = {UsersModel};