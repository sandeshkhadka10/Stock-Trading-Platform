require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// it is for the deployment
const PORT = process.env.PORT || 3002;

const url = process.env.MONGO_URL;

app.listen(3002,()=>{
    console.log("App started!");
    mongoose.connect(url);
    console.log("Database connected");
});