
// Load Environment Variables
require('dotenv').config();

// Dependencies
const express = require('express'),
      app = express(),
      port = process.env.PORT || '0.0.0.0' || 5000,
      expressLayouts = require('express-ejs-layouts'),
      mongoose = require('mongoose');

// Configure Application

// Access to static assets
app.use(express.static(__dirname + '/public'));

// Setting EJS as template
app.set('view engine', 'ejs');
app.use (expressLayouts);

// Connect to Database
mongoose.connect(process.env.DB_URI);

// Setting Routes
app.use(require('./app/routes'));

// Starting Server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
