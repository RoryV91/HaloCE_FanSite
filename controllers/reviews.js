//==================
//  DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//==================
//   CREATE ROUTE
//==================
router.post('/', (req, res) => {
    db.Item.findByIdAndUpdate(
        req.body.itemId,
        { $push: { reviews: req.body } },
        { new: true },
        (err, item) => {
            res.json(item)
        }
    )
})


//==========================================
//   INDEX ROUTE: ALL REVIEWS FOR AN ITEM
//==========================================
router.get('/item/:id', (req, res) => {
    db.Item.findById(
        req.params.id,
        { name: true, reviews: true, _id: false },
        (err, item) => {
            res.json(item)
        }
    )
})

//========================================
//   INDEX ROUTE: ALL REVIEWS BY A USER
//========================================
router.get('/user/:id', (req, res) => {
    db.User.findById(
        req.params.id,
        (err, user) => {
            db.Item.find(
                { 'reviews.reviewer': req.params.id },
                { 'reviews.$': true, _id: false },
                (err, items) => {
                    const result = {
                        user: user.name,
                        reviews: []
                    }
                    for (let item of items) {
                        result.reviews.push(...item.reviews)
                    }
                    res.json(result)
                }
            )
        }
    )
})
//==================
//   UPDATE ROUTE
//==================
router.put('/:id', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        {
            $set: {
                'reviews.$.title': req.body.title,
                'reviews.$.body': req.body.body
            }
        },
        () => {
            res.redirect(`/reviews/${req.params.id}`)
        }
    )
})

//==================
//   DELETE ROUTE
//==================
router.delete('/:id', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        {
            $pull: {
                reviews: { _id: req.params.id }
            }
        },
        { new: true },
        (err, item) => {
            res.json(item)
        }
    )
})

//==================
//   INDEX ROUTE
//==================
router.get('/:id', (req, res) => {
    db.Item.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false },
        (err, review) => {
            res.json(review.reviews[0])
        }
    )
})

//===================
//   EXPORT ROUTES  
//===================

module.exports = router;