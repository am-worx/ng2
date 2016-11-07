const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    models = require('./models');

let app = express();
let port = process.env.PORT || 3000;

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Visitors = new Schema({
    _id: ObjectId,
    firstName: String,
    lastName: String,
    registrationDate: Date,
    lastVisit: Date,
    balance: Number
});

mongoose.connect('mongodb://localhost/visitors_database', (err) => {
    if (err) throw err;

    let app = express();

    app.use(express.static(path.join(__dirname, '../frontend')));
    app.use(morgan('common'));
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());

    routes(app);

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});