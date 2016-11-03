const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(morgan('short'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendfile('./public/index.html');
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});