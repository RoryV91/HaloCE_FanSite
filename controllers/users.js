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


//==================
//   CREATE ROUTE
//==================
router.post('/signup', (req, res) => {
    db.User.create(req.body, (err, user) => {
        res.json(user)
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