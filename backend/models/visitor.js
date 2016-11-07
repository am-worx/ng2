const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    //_id: String
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true},
    registrationDate: Date,
    lastVisit: Date,
    balance: Number
});

let Visitor = mongoose.model('Visitor', schema);

module.exports = Visitor;