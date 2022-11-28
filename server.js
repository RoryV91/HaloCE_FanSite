//==================
//  CONFIGURATION  
//==================
const express = require('express');
const app = express();
const PORT = 3000;
const usersController = require('./controllers/users.js');
const itemsController = require('./controllers/items.js');
const reviewsController = require('./controllers/reviews.js');

//===============
// MIDDLEWARE
//===============

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//===============
//    ROUTES
//===============
app.get('/', (req, res) => {
	res.send('This is an API with no front end, use Postman to interact with the API!');
});
// Item routes
app.use('/items', itemsController);
// User routes
app.use('/users', usersController);
// Review routes
app.use('/items/reviews', reviewsController);

//===============
// START SERVER
//===============
app.listen(PORT, () =>
	console.log('Nade Jump API is listening on port: ' + PORT)
);
