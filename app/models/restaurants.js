const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// Create Schema
const restaurantsSchema = new Schema({
  CAMIS: Number,
  DBA: String,
  BORO: String,
  BUILDING: Number,
  STREET: String,
  ZIPCODE: Number,
  PHONE: String,
  CUISINE: String,
  INSPECTION: String,
  SCORE: Number,
  GRADE: String
}, { collection: 'restaurantTask'});

// Create Model
const restaurantsModel = mongoose.model('Restaurants', restaurantsSchema);

// Export Model
module.exports = restaurantsModel;
