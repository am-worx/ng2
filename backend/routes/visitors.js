const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//let Visitor = mongoose.model('Visitor');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/visitors', function(req, res, next) {
        // CandyProfile.find().sort('firstName').limit(10).exec(function (err, candies) {
        Visitor.find().exec(function(err, data){
            if (err) return next(err);
            res.send(data);
            console.log(data);
        });
    });

    app.post('/api/visitors', function(req, res, next) {
        Visitor.create(req.body, function(err){
            if (err) return next(err);
        })
    });

    app.delete('/api/visitors', function(req, res, next) {
        Visitor.findOne({_id: req.param('id')}, function(err, visitor){
            if (err) return next(err);

            visitor.remove(function(err) {
                if (err) return next(err);
            })
        })
    })
};