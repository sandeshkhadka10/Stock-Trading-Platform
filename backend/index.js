require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// it is for the deployment
const PORT = process.env.PORT || 3002;

const url = process.env.MONGO_URL;
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser  = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const {userVerification} = require("./middlewares/AuthMiddleware");

app.listen(3002, () => {
  console.log("App started!");
  mongoose.connect(url);
  console.log("Database connected");
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow both ports
  credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/",authRoute);

// adding the dummy data for holdings in the database
// app.get("/addHoldings",(req, res) => {
//   let tempData = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempData.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done");
// });

// adding the dummy data for positions in the database
// app.get("/addPositions", (req, res) => {
//   let tempData = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempData.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("Done");
// });

// getting all the holdings values from the database
app.get("/allHoldings",userVerification,async (req, res) => {
  try{
    let userId = req.user._id;
    let allHoldings = await HoldingsModel.find({userId});
    res.json(allHoldings);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
});

// getting all the positions values from the database
app.get("/allPositions",userVerification, async (req, res) => {
  try{
    let userId = req.user._id;
    let allPositions = await PositionsModel.find({userId});
    res.json(allPositions);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
});

// it is for buying and selling the stock
app.post("/newOrder", userVerification, async (req, res) => {
  const { name, qty, price, model } = req.body;
  const userId = req.user._id;

  if (model === "Buy") {
    try {
      await OrdersModel.create({ name, qty, price, model, userId });

      let existing = await HoldingsModel.findOne({ name, userId });

      const newQty = Number(qty);
      const newPrice = Number(price);

      if (existing) {
        const totalQty = existing.qty + newQty;
        const totalCost = existing.avg * existing.qty + newPrice * newQty;
        const newAvg = totalCost / totalQty;

        const ltp = newPrice;
        const currValue = ltp * totalQty;
        const isLoss = currValue < totalCost;
        const netChange = ((currValue - totalCost) / totalCost) * 100;
        const sign = netChange >= 0 ? "+" : "-";
        const net = `${sign}${netChange.toFixed(2)}%`;

        existing.qty = totalQty;
        existing.avg = newAvg;
        existing.price = ltp;
        existing.net = net;
        existing.isLoss = isLoss;

        await existing.save();

        return res
          .status(200)
          .json({ message: "Order placed and holdings updated" });
      } else {
        const avg = newPrice;
        const ltp = newPrice;
        const currValue = ltp * newQty;
        const totalInvestment = avg * newQty;
        const netChange = ((currValue - totalInvestment) / totalInvestment) * 100;
        const sign = netChange >= 0 ? "+" : "-";
        const net = `${sign}${netChange.toFixed(2)}%`;
        const isLoss = currValue < totalInvestment;

        await HoldingsModel.create({
          name,
          qty: newQty,
          avg,
          price: ltp,
          net,
          day: "+0.00%",
          isLoss,
          userId,
        });

        return res.status(201).json({ message: "New holding created" });
      }
    } catch (error) {
      console.error("Error processing order:", error);
      return res.status(500).json({
        message: "Error processing order",
        error: error.message,
      });
    }
  } else if (model === "Sell") {
    try {
      let existing = await HoldingsModel.findOne({ name, userId });

      if (!existing) {
        return res.status(400).json({ message: "You don't own this stock" });
      }

      const sellQty = Number(qty);
      const sellPrice = Number(price);

      if (existing.qty < sellQty) {
        return res.status(400).json({
          message: `Insufficient quantity. You own ${existing.qty} shares but trying to sell ${sellQty}`,
        });
      }

      await OrdersModel.create({ name, qty: sellQty, price: sellPrice, model, userId });

      const remainingQty = existing.qty - sellQty;

      if (remainingQty === 0) {
        await HoldingsModel.deleteOne({ _id: existing._id });
        return res.status(200).json({ message: "All shares sold. Holding removed" });
      } else {
        const ltp = sellPrice;
        const currValue = ltp * remainingQty;
        const totalInvestment = existing.avg * remainingQty;
        const netChange = ((currValue - totalInvestment) / totalInvestment) * 100;
        const sign = netChange >= 0 ? "+" : "-";
        const net = `${sign}${netChange.toFixed(2)}%`;
        const isLoss = currValue < totalInvestment;

        existing.qty = remainingQty;
        existing.price = ltp;
        existing.net = net;
        existing.isLoss = isLoss;

        await existing.save();

        return res.status(200).json({
          message: `${sellQty} shares sold successfully. ${remainingQty} shares remaining.`,
        });
      }
    } catch (error) {
      console.error("Error processing order: ", error);
      return res.status(500).json({
        message: "Error processing order",
        error: error.message,
      });
    }
  } else {
    return res.status(400).json({ message: "Invalid order model. Use 'Buy' or 'Sell'" });
  }
});


app.get("/allOrders",userVerification,async (req, res) => {
  try{
    const userId = req.user._id;
    let allOrders = await OrdersModel.find({userId});
    res.json(allOrders);
  }catch(err){
    res.status(500).json({message:"Server Error"});
  }
});

app.get("/getOrder/:id",userVerification,async(req,res)=>{
  const {id} = req.params;
  let oneOrder = await OrdersModel.findById(id);
  res.json(oneOrder);
});

app.put("/editOrder/:id", userVerification, async (req, res) => {
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
});


app.delete("/deleteOrder/:id",userVerification,async (req, res) => {
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
});
