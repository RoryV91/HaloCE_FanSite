//==================
//   DEPENDENCIES  
//==================
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = require ('./review.js')

//==================
//   ITEM SCHEMA  
//==================
const itemSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
        origin: {
            type: String,
            required: true,
        },
        capacity: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        reviews: [reviewSchema]
    }
);

//=============================
//   MODEL USING ITEM SCHEMA  
//=============================

const Item = mongoose.model('Item', itemSchema);

//===================
//   EXPORT MODEL  
//===================

module.exports = Item;
