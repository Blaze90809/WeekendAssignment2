var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var mathWork = require('./module/math.js');
var mathRouter = require('./routes/math_router.js')

app.use(bodyParser.urlencoded({extended: true}));

app.use('/numbersin', mathRouter);

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
});