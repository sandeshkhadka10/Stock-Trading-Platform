const express = require("express");
const router = express.Router();
const {AllHoldings,AllPositions,AllOrders, GetOrder, EditOrder, DeleteOrder, NewOrder} = require("../controllers/ShareController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const {validateOrder} = require("../middlewares/ValidationMiddleware");
const wrapAsync = require("../util/wrapAsync");

router.get("/allHoldings",userVerification,wrapAsync(AllHoldings));

router.get("/allPositions",wrapAsync(AllPositions));

router.post("/newOrder", userVerification,validateOrder,wrapAsync(NewOrder));

router.get("/allOrders",userVerification,wrapAsync(AllOrders));

router.get("/getOrder/:id",userVerification,wrapAsync(GetOrder));

router.put("/editOrder/:id", userVerification,validateOrder,wrapAsync(EditOrder));

router.delete("/deleteOrder/:id",userVerification,wrapAsync(DeleteOrder));

module.exports = router;