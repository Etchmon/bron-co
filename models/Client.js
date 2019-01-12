var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientSchema = new Schema({

    clientName: String,

});

var Client = mongoose.model("Client", ClientSchema);

module.exports = Client;