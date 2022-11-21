//==================
//   DEPENDENCIES  
//==================
const mongoose = require("mongoose");

//=======================================
//    CONNECT TO MONGODB VIA MONGOOSE
//=======================================

const connectionString = "mongodb://localhost:27017/nade-jump"
mongoose.connect(
    connectionString,
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