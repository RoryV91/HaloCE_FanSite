//==================
//  CONFIGURATION  
//==================
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const MONGODBURI = process.env.MONGODBURI
const db = require('./models')
const usersController = require('./controllers/users.js');
const itemsController = require('./controllers/items.js');
const reviewsController = require('./controllers/reviews.js');
const methodOverride = require('method-override');

//===============
// MIDDLEWARE
//===============


app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//===============
//    ROUTES
//===============

app.get('/', (req, res) => {
	res.render('home', { 
			tabTitle: 'Nade Jump'
            })
        })

// Item routes
app.use('/items', itemsController);
// User routes
app.use('/users', usersController);
// Review routes
app.use('/items/reviews', reviewsController);
// 


//===============
// START SERVER
//===============
app.listen(PORT, () =>
	console.log('Nade Jump API is listening on port: ' + PORT)
);
