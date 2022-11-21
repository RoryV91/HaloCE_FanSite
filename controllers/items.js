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
	db.Item.find({}, (err, items) => {
		res.json(items)
	})
});


//===================
//   EXPORT ROUTES  
//===================
module.exports = router;