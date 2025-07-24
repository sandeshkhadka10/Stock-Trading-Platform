const express = require("express");
const router = express.Router();
const {AllHoldings,AllPositions,AllOrders, GetOrder, EditOrder, DeleteOrder, NewOrder} = require("../controllers/ShareController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const {validateOrder} = require("../middlewares/ValidationMiddleware");

router.get("/allHoldings",userVerification,AllHoldings);

router.get("/allPositions",AllPositions);

router.post("/newOrder", userVerification,validateOrder,NewOrder);

router.get("/allOrders",userVerification,AllOrders);

router.get("/getOrder/:id",userVerification,GetOrder);

router.put("/editOrder/:id", userVerification,EditOrder);

router.delete("/deleteOrder/:id",userVerification,DeleteOrder);

module.exports = router;