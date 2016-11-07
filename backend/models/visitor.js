const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VisitorSchema = new Schema({
    //_id: String
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true},
    registrationDate: Date,
    lastVisit: Date,
    balance: Number
});

let Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;
