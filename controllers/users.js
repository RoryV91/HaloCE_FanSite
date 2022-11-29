//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//==================
//   DELETE ROUTE
//==================
router.delete('/delete/:id', (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, user) => {
        res.redirect('/')
    })
});

// login post
router.post('/login', (req, res) => {
    const aUser = db.User.findOne({name: req.body.username}, async (err, aUser) => {
        if (err || aUser == null) {
            res.render('home.ejs', {loginResult: "noUser", tabTitle: "Nade Jump"})
        } else if (aUser.password !== req.body.password) {
           res.render('home.ejs', {loginResult: "badPassword", tabTitle: "Nade Jump"})
        } else  {
            const populatedItems = await db.Item.find({}).populate('reviews.reviewer')
        	res.render('items.ejs', {items: populatedItems, tabTitle: 'All Items'})
        } 
    })

})


//==================
//   CREATE ROUTE
//==================
router.get('/signup', (req, res) => {
        res.render('newUser.ejs', {tabTitle: "New User Sign-up"})

});


router.post('/signup', (req, res) => {
    const newUser = db.User({name: req.body.username, password: req.body.password})
    db.User.create(newUser, (err, user) => {
        res.render('home.ejs', {tabTitle: "Nade Jump"})
    })
});

//=================
//   INDEX ROUTE
//=================

router.get('/reviews/:id')
//===================
//   EXPORT ROUTES  
//===================

module.exports = router;