//Dependencies
var express = require("express");
var path = require("path");

//Set up express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// =============================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//DATA
// =============================================================================
require("./app/data/friends")(app);

// LISTENER - Start the server
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
