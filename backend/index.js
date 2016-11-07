const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes = require('./routes');

let app = express();
let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/visitors_database', (err) => {

    if (err) {console.log(err); throw err;}

    let app = express();

    app.use(express.static(path.join(__dirname, '../frontend')));
    app.use(morgan('common'));
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());

    routes(app);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
    });



    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });

});

