const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

module.exports.AllHoldings = async (req, res) => {
  try{
    let userId = req.user._id;
    let allHoldings = await HoldingsModel.find({userId});
    res.json(allHoldings);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
};

module.exports.AllPositions = async (req, res) => {
  try{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
};

module.exports.AllOrders = async (req, res) => {
  try{
    const userId = req.user._id;
    let allOrders = await OrdersModel.find({userId});
    res.json(allOrders);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
};

module.exports.GetOrder = async(req,res)=>{
  const {id} = req.params;
  let oneOrder = await OrdersModel.findById(id);
  res.json(oneOrder);
};

module.exports.EditOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { qty, price } = req.body;
    const userId = req.user._id;
    
    let order = await OrdersModel.findById(id);
    if (!order || order.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Unauthorized or order not found" });
    }

    const oldQty = order.qty;
    const oldPrice = order.price;

    order.qty = qty;
    order.price = price;
    await order.save();

    const holding = await HoldingsModel.findOne({ name: order.name, userId });
    if (!holding) {
      return res.status(404).json({ message: "Related holding not found" });
    }

    if (order.model === "Buy") {
      const totalQty = holding.qty - oldQty + qty;
      const totalCost = holding.avg * holding.qty - oldPrice * oldQty + price * qty;
      const newAvg = totalCost / totalQty;
      const ltp = price;
      const currValue = ltp * totalQty;
      const netChange = ((currValue - totalCost) / totalCost) * 100;
      const net = `${netChange >= 0 ? "+" : ""}${netChange.toFixed(2)}%`;
      const isLoss = currValue < totalCost;

      holding.qty = totalQty;
      holding.avg = newAvg;
      holding.price = ltp;
      holding.net = net;
      holding.isLoss = isLoss;

      await holding.save();

    } else if (order.model === "Sell") {
      const newQty = holding.qty + oldQty - qty;

      if (newQty < 0) {
        return res.status(400).json({
          message: `Invalid update: You cannot sell more than you hold. Holding: ${holding.qty}, Trying to sell: ${qty}`,
        });
      }

      if (newQty === 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        const ltp = price;
        const currValue = ltp * newQty;
        const totalInvestment = holding.avg * newQty;
        const netChange = ((currValue - totalInvestment) / totalInvestment) * 100;
        const net = `${netChange >= 0 ? "+" : ""}${netChange.toFixed(2)}%`;
        const isLoss = currValue < totalInvestment;

        holding.qty = newQty;
        holding.price = ltp;
        holding.net = net;
        holding.isLoss = isLoss;

        await holding.save();
      }
    }

    return res.status(200).json({ message: "Order and holding updated successfully" });

  } catch (error) {
    console.error("Edit error:", error);
    return res.status(500).json({ message: "Failed to edit order", error: error.message });
  }
};

module.exports.DeleteOrder = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    const order = await OrdersModel.findById(id);
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    const { name, qty, price, model } = order;

    await OrdersModel.findByIdAndDelete(id);

    let holding = await HoldingsModel.findOne({ name, userId});
    if (!holding) {
      return res.status(200).send({ message: "Order deleted. No holding found." });
    }

    if (model === "Buy") {
      const totalCost = holding.avg * holding.qty;
      const removedCost = price * qty;
      const newQty = holding.qty - qty;

      if (newQty <= 0) {
        await HoldingsModel.deleteOne({ name,userId });
      } else {
        const newAvg = (totalCost - removedCost) / newQty;
        holding.qty = newQty;
        holding.avg = newAvg;
        await holding.save();
      }
    }

    if (model === "Sell") {
      holding.qty += qty; // undo the sell
      await holding.save();
    }

    res.status(200).send({ message: "Order and holdings updated" });
  } catch (error) {
    console.error("Error deleting stock order:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};