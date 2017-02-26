var express = require("express");
var bodyParser = require('body-parser');
var calculate = require("./routes/calculate");
var app = express();
var port = 8585;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('lib/public'));
app.use('/calculate', calculate);

app.listen(port);
console.log("Listening on port: ", port);
