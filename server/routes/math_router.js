var express = require('express');
var router = express.Router();

var x;
var y;
var type;
router.post('/', function(req, res){
x = parseInt(req.body.number1);
y = parseInt(req.body.number2);
type = req.body.type;
res.sendStatus(201);
console.log('number 1 is: ' + x);
console.log('number 2 is: ' + y);
console.log('the type is: ' + type);
return x;
return y;
return type;
});

var answer;
function mathCalculation(){
    console.log('math function');
   if (type === 'add'){
   answer = x + y;
   console.log('add answer:' + answer);
   return answer;
   }
   else if (type === 'subtract'){
   answer = x - y;
   console.log('subtract answer:' + answer);
   return answer;
   }
   else if (type === 'divide'){
       answer = x / y;
       console.log('divide answer:' + answer);
       return answer;
   }
   else if (type === 'multiply'){
       answer = x * y;
       console.log('multiply answer:' + answer);
       return answer;
   }
    
}

router.get('/', function (req, res){
    mathCalculation();
    res.send({answer});
    console.log(answer);
    });

    module.exports = router;