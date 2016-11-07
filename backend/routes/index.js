var fs = require('fs');
    visitors = require('./visitors');

module.exports = function(app) {
    visitors(app);
};