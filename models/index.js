//==================
//   DEPENDENCIES  
//==================
const mongoose = require("mongoose");
const MONGODBURI = process.env.MONGODBURI

require('dotenv').config()

//=======================================
//    CONNECT TO MONGODB VIA MONGOOSE
//=======================================

const connectionString = MONGODBURI
mongoose.connect(
    "mongodb+srv://admin:mongo@cluster0.se5qhkr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

//=======================
//   CONNECTION STATUS
//=======================

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

//=================
//  ACCESS MODELS
//=================

module.exports.Item = require("./item.js");
module.exports.User = require("./user.js");
module.exports.Review = require("./review.js");