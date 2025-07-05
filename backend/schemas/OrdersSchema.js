const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name:{
    type: String,
    required:true
  },
  qty: {
    type:Number,
    required:true
  },
  price: {
    type:Number,
    required:true
  },
  model: {
    type:String,
    required:true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

module.exports = { OrdersSchema };
