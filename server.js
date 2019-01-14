var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

var PORT = 3000;

var db = require("./models");

var app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/bronco");

require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.post("/submit", function(req, res) {
  console.log(req.body)

  db.Client.create(req.body)
  .then(function(dbClient){
    res.json(dbClient);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.get("/clients", function(req, res) {
  db.Client.find({}).then(function(dbClient){
    res.json(dbClient);
  });
});


