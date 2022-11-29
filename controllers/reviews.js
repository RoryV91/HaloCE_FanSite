//==================
//  DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//==================
//   CREATE ROUTE
//==================
router.post('/add/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { "name": req.params.name},
        { $push: { reviews: req.body } },
        { new: true },
        (err, item) => {
            res.json(item)
        }
    )
})

//=================
//    NEW ROUTE
//=================


//==========================================
//   INDEX ROUTE: ALL REVIEWS FOR AN ITEM
//==========================================
router.get('/item/:name', (req, res) => {
    db.Item.findOne(
        { "name" : req.params.name},
        { name: true, reviews: true, _id: false },
        (err, item) => {
            res.json(item)
        }
    )
})

//========================================
//   INDEX ROUTE: ALL REVIEWS BY A USER
//========================================
router.get('/user/:name', (req, res) => {
    db.User.findOne(
        {"name": req.params.name},
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
router.put('/edit/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'name': req.params.name, "reviews._id": req.body._id},
        {
            $set: {
                'reviews.$.title': req.body.title,
                'reviews.$.body': req.body.body
            }
        },
        () => {
            res.redirect(`/items/${req.params.name}`)
        }
    )
})

//==================
//   DELETE ROUTE
//==================
router.delete('/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'name': req.params.name },
        {
            $pull: {
                reviews: { _id: req.body._id }
            }
        },
        { new: true },
        (err, item) => {
            res.json(item)
        }
    )
})


//===================
//   EXPORT ROUTES  
//===================

module.exports = router;