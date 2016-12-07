const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('../models');
let Visitor = mongoose.model('Visitor');

let Schema = mongoose.Schema;

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/visitors', function(req, res, next) {
        // CandyProfile.find().sort('firstName').limit(10).exec(function (err, candies) {
        Visitor.find().exec(function(err, data){
            if (err) return next(err);
            res.send(data);
        });
    });

    app.post('/api/visitors', function(req, res, next) {
        console.log('POSTing');
        Visitor.create(req.body, function(err, data){
            if (err) {console.log(err); return next(err)}
            res.send(data);
        })
    });

    app.delete('/api/visitors/:id', function(req, res, next) {
        console.log('Remove', req.params.id);
        id = req.params.id;
        Visitor.findOne({_id: id}, function(err, visitor){
            if (err) return next(err);

            visitor.remove(function(err, data) {
                if (err) return next(err);
                res.send(data);
            })
        })
    })
};