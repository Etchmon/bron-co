var clientData = require("../data/clientData");

module.exports = function(app) {

    app.get("/api/clients", function(req, res) {
        res.json(clientData);
    });

    app.post("/api/clients", function(req, res) {
        clientData.push(req.body);
    })
}
