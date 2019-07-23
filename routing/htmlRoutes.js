// we need to include the path package to get the correct file path for our html
var path = require("path");

// routing
module.exports = function(app) {
  // html GET Requests
  // below code handles when users "visit" a page
  // in each of the below cases the user is shown an html page of content

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "Users/austin/Desktop/Trilogy-Hw/FriendFinder/public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "Users/austin/Desktop/Trilogy-Hw/FriendFinder/public/home.html"));
  });
};
