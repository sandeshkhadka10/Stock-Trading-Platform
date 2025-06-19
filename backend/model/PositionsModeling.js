const {model} = require("mongoose");
const {PositionsSchema} = require("../schemas/PositionsSchema");
const PositionsHolding = new model("Position",PositionsSchema);
exports.module = {PositionsHolding};