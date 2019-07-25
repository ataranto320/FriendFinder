var express = require("express");

// tells node that we are creating an "express" server 
var app = express();

// sets an initial port
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// the below points our server to a series of "route" files
// these routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// the below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
