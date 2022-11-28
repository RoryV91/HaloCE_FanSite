//==================
//   DEPENDENCIES  
//==================
const express = require('express');
const router = express.Router();
const db = require('../models');

//=========================
//   INDEX ROUTE FOR ALL
//=========================
router.get('/', (req, res) => {
	db.Item.find({}, (err, items) => {
		res.json(items)
	})
});

//=================================
//   INDEX ROUTE FOR ONE BY NAME
//=================================
router.get('/:id', (req, res) => {
	db.Item.findOne({'id': req.params.id}, (err, item) => {
		res.json(item)
	})
});


//===================
//   EXPORT ROUTES  
//===================
module.exports = router;