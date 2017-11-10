var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});