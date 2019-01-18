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

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

app.post("/submit", function (req, res) {
  console.log(req.body)

  db.Client.create(req.body)
    .then(function (dbClient) {
      res.json(dbClient);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.get("/clients", function (req, res) {
  db.Client.find({}).then(function (dbClient) {
    res.json(dbClient);
  });
});

app.post("/find", function (req, res) {
  console.log(req.body);
  console.log(req.body.clientName)
  db.Client.findOneAndUpdate({ clientName: req.body.clientName },
    {
        clientName: req.body.clientName,
        status: req.body.status,
        brand: req.body.brand,
        return: req.body.return,
        contact: req.body.contact,
        special: req.body.special,
        description1: req.body.description1,
        consult: req.body.consult,
        description2: req.body.description2,
        scheduled: req.body.scheduled,
        description3: req.body.description3,
        agreement: req.body.agreement,
        description4: req.body.description4,
        depositAmount: req.body.depositAmount,
        totalPrice: req.body.totalPrice,
        signed: req.body.signed,
        totalBySessionDate: req.body.totalBySessionDate,
        shotList: req.body.shotList,
        description5: req.body.description5,
        lenses: req.body.lenses,
        rental: req.body.rental,
        complete: req.body.complete,
        description6: req.body.description6,
        sdhd: req.body.sdhd,
        description7: req.body.description7,
        lr: req.body.lr,
        description8: req.body.description8,
        preview: req.body.preview,
        description9: req.body.description9,
        final: req.body.final,
        description10: req.body.description10,
    },
    { new : true })
    .then(function (dbClient) {
      res.json(dbClient);
    })
    .catch(function (err) {
      res.json(err);
    });
});




