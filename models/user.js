//==================
//   DEPENDENCIES  
//==================

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//==================
//   USER SCHEMA  
//==================

const userSchema = new Schema(
    { name: String }
);

//=============================
//   MODEL USING USER SCHEMA  
//=============================

const User = mongoose.model('User', userSchema);

//===================
//   EXPORT MODEL  
//===================

module.exports = User;
