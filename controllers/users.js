//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//==================
//   INDEX ROUTE
//==================
router.get('/', (req, res) => {
    db.User.find({}, (err, users) => {
        res.json(users)
    })
});

//==================
//   CREATE ROUTE
//==================
router.post('/api/auth/signup', (req, res) => {
    db.User.create(req.body, (err, user) => {
        res.json(user)
    })
});

//===================
//   EXPORT ROUTES  
//===================

module.exports = router;