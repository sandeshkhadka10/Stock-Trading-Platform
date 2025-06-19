const {model} = require("mongoose");
const {OrdersSchema} = require("../schemas/OrdersSchema");
const OrdersModel = new model("Orders",OrdersSchema);
exports.module = {OrdersModel};