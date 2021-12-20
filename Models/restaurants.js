const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    

    location_id: {
        type: Number,
        required: true
    } ,
    mealtype_id: {
        type: Number,
        required: true
    } ,
    cuisine_id: {
        type: Number,
        required: true
    } ,
    min_price: {
        type: Number,
        required: false
    } 
    
   
})

module.exports = mongoose.model('restaurant', restaurantsSchema, 'restaurants');