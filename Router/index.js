const express = require('express');

const locationsController = require('../Controllers/locations');
const mealtypesController = require('../Controllers/mealtypes');
const restaurantController = require('../Controllers/restaurants');
const userController = require('../Controllers/users');
const menuItemsController = require('../Controllers/menuitems');
const paymentController = require('../Controllers/payments');

const route = express.Router();

route.get('/locations', locationsController.getLocations);
route.get('/mealtypes', mealtypesController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantsByLocId);
route.post('/signup', userController.userSignUp);
route.post('/login', userController.userLogin);
route.post('/filter', restaurantController.filterRestaurants);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);

// Paytm Gateway 

route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);

module.exports = route;