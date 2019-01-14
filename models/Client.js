var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClientSchema = new Schema({

    clientName: String,
    status: String,
    brand: String,
    return: String,
    contact: String,
    special: String,
    description1: String,
    consult: String,
    description2: String,
    scheduled: String,
    description3: String,
    agreement: String,
    description4: String,
    depositAmount: String,
    totalPrice: String,
    signed: String,
    totalBySessionDate: String,
    shotList: String,
    description5: String,
    lenses: String,
    rental: String,
    complete: String,
    description6: String,
    sdhd: String,
    description7: String,
    lr: String,
    description8: String,
    preview: String,
    description9: String,
    final: String,
    description10: String,
});

var Client = mongoose.model("Client", ClientSchema);

module.exports = Client;