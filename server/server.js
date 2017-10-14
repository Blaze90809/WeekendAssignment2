var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var mathWork = require()

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
});


app.post("/numbersin", function(req, res){
var x = parseInt(req.body.number1);
var y = parseInt(req.body.number2);
var type = req.body.type;
console.log('number 1 is: ' + x);
console.log('number 2 is: ' + y);
console.log('the type is: ' + type);
res.sendStatus(200);
});