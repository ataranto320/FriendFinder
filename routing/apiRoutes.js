// LOAD DATA
// we are linking our routes to a series of "data" sources
// these data sources hold arrays of information on friend-data, etc.

var friendsData = require("app/data/friendsData");
//friend.js

// routing
module.exports = function(app) {
  // API GET Requests
  // below code handles when users "visit" a page
  // when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // below code handles when a user submits a form and thus submits data to the server
  // when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // then the server saves the data to the friendsData array)

  app.post("/api/friends", function(req, res) {
    // "server" will respond to requests and let users know the best friend match for them
    // it will do this by sending out the value "true" friend match
    // req.body is available since we're using the body parsing middleware
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
  });
};
