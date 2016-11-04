const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(morgan('short'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});