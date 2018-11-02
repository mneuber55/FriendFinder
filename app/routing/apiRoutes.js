
// LOAD DATA
// ===============================================================================

var friendData = require("../data/friends.js");

// ROUTING
// ===============================================================================

module.exports = function(app) {

// GET Request
// ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// POST Request
// ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    friendData.push(req.body);
    res.json(friendData[Math.floor(Math.random() * friendData.length)]);

    //NEED TO BUILD MATCHING ALGO

});
}