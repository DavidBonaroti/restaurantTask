// Creating Express Router
const express = require('express'),
      router = express.Router(),
      mainController = require('./controllers/main.controller'),
      restaurantsController = require('./controllers/restaurants.controller');

// Exporting Router
module.exports = router;

// Defining Routes

//Main Home Route
router.get('/', mainController.showHome);

//Show Restaurants 
router.get('/restaurants', restaurantsController.showRestaurants);
