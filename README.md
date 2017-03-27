# restaurantTask
NYC Inspection Data Restaurant Selection Application

Hey Orchard Team,

Within this README file, I would like to discuss the architecture of my application and some of the issues that I encountered
during the creation process.

The application was generated using Node, Express, MongoDB, Mongoose and EJS Templating. Originally, I had pushed the NYC Data CSV file 
into my local MongoDB database, however during my attempts to launch the application with Heroku, I pivoted and imported the CSV file 
into a collection within mLab. I connected to the mLab's database collection in my server.js file (.env file contains the DB_URI string).

The views/pages/restaurants.ejs file renders the queried data. Users can select which Cuisine, Borough, and Grade they prefer when
finding a restaurant of their choosing. 

Issues: 

Output is limited to 1 restaurant only. Using a for loop of for(i = 0; i < 10; i++), I could succesfully output ten restuarants meeting
the customers criteria, however, the application would crash upon returning to the /restaurants end point, therefore a 
for loop of for(i = 0; i < 1; i++) is used to satisfy the if - else statement within the showRestuarants function. I suspect that the issue
is related to this logic inside the showRestaurants function located in the controllers/restaurant.controllers.js file. Upon an initial visit, 
this function will render an EJS object called "restaurants" which contains hard coded placeholders for the table headers in 
restaurants.ejs. Once a user makes parameters selections from the drop down menus and hits the submit button, the showRestaurants 
function is activated again, however this time, the end point contains query params which validates the if statement. At this 
time, the params are matched to the Restaurants (csv file) data model using the Mongoose find method. The application will output 
the first restaurant that meets the parameters specified by the customer. If the for loop is extended to i < 10 after the inital visit,
the application has no issue rendering 10 restaurants which satisfy the query parameters. During the initial contact with /restaurants
the application will fail due to the "restaurants" object length = 1. The console states that it cannot render an 'undefined' object 
beyond the first loop. 

Thank you. 
