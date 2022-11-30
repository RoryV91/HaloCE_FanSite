//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
    db.User.findOne({name: req.body.username}, async (err, aUser) => {
        if (err || aUser == null) {
            res.render('home.ejs', {loginResult: "noUser", tabTitle: "Nade Jump"})
        } else if (await bcrypt.compare(req.body.password, aUser.password)) {
            const populatedItems = await db.Item.find({})
            //.populate('reviews.reviewer')
        	res.redirect('/items')
            res.render('items.ejs', {items: populatedItems, tabTitle: 'All Items'})
        } else  {
            res.render('home.ejs', {loginResult: "badPassword", tabTitle: "Nade Jump"})
        } 
    })

})


//=================
//    NEW ROUTE
//=================
router.get('/signup', (req, res) => {
        res.render('newUser.ejs', {tabTitle: "New User Sign-up"})

});

//==================
//   CREATE ROUTE
//==================

router.post('/signup', async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds)
    const newUser = db.User({name: req.body.username, password: hashPassword})
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