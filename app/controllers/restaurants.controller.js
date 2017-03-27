const Restaurants = require('../models/restaurants');


module.exports = {
  showRestaurants: showRestaurants
}

// Show Restaurants
function showRestaurants(req, res) {
  console.log(req.query);
  if(req.query.select_cuisine) {
    const greeting = "Please make a selection from the parameters below.";
    const parameters = req.query;
    Restaurants.find({ CUISINE: parameters.select_cuisine, BORO: parameters.select_boro, GRADE: parameters.select_grade }, (err, restaurants) => {
      res.render('pages/restaurants', {
          greeting: greeting,
          restaurants: restaurants
      });
    });
  } else {
    const restaurants = [{
        DBA: "Restaurant Name",
        CUISINE: "Type of Food",
        STREET: "Address",
        BORO: "NYC Borough",
        ZIPCODE: "Zip",
        PHONE: "Number",
        SCORE: "Violations Total. Lower is Better",
        GRADE: "A = Safe | B = You're Risking It | C = Avoid like the plague."
      }];
      const greeting = "Please make a selection from the parameters below.";
      res.render('pages/restaurants', {
          greeting: greeting,
          restaurants: restaurants
      });
  };
}
