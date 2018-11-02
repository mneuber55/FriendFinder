
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
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });
};