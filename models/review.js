//==================
//   DEPENDENCIES  
//==================

const mongoose = require('mongoose')
const Schema = mongoose.Schema


//===================
//   REVIEW SCHEMA  
//===================
const reviewSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        // a review can only be created if it references an existing user._id
        reviewer: {
            type: mongoose.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);

//===============================
//   MODEL USING REVIEW SCHEMA  
//===============================

const Review = mongoose.model('Review', reviewSchema);

//===================
//   EXPORT MODEL  
//===================

//module.exports = reviewSchema;
module.exports = Review;