//==================
//  DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//=================
//    NEW ROUTE
//=================

router.get('/add/:name', (req, res) => {
    
    res.render('newReview.ejs', {tabTitle: "Add a Review", item_name: req.params.name})

});

//==================
//   CREATE ROUTE
//==================
router.post('/add/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { "name": req.params.name},
        { $push: { reviews: req.body } },
        { new: true },
       async (err, item) => {
            const populatedItems = await db.Item.find({})
            //.populate('reviews.reviewer')
        	res.redirect('/items')
            res.render('items.ejs', {items: populatedItems, tabTitle: 'All Items'})
        }
    )
})



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
//   EDIT ROUTE
//==================
router.post('/edit/:name', (req, res) => {
        
            res.render('editReview.ejs', {tabTitle: "Edit Review", item_name: req.params.name, reviewID: req.body.reviewID, currentTitle: req.body.currentTitle, currentBody: req.body.currentBody })
})

//==================
//   UPDATE ROUTE
//==================
router.post('/update/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'name': req.params.name, "reviews._id": req.body.reviewID},
        {
            $set: {
                'reviews.$.title': req.body.title,
                'reviews.$.body': req.body.body
            }
        }, 
        {new: true},
        async (err, item) => {
            const populatedItems = await db.Item.find({})
            //.populate('reviews.reviewer')
        	res.redirect('/items')
            res.render('items.ejs', {items: populatedItems, tabTitle: 'All Items'})
        }
    )
})

//==================
//   DELETE ROUTE
//==================
router.post('/:name', (req, res) => {
    db.Item.findOneAndUpdate(
        { 'name': req.params.name },
        {
            $pull: {
                reviews: { _id: req.body.reviewID }
            }
        },
        { new: true },
        async (err, item) => {
            const populatedItems = await db.Item.find({})
            //.populate('reviews.reviewer')
        	res.redirect('/items')
            res.render('items.ejs', {items: populatedItems, tabTitle: 'All Items'})
        }
    )
})


//===================
//   EXPORT ROUTES  
//===================

module.exports = router;