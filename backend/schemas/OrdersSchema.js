const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  model: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { OrdersSchema };
