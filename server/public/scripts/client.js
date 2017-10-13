$(document).ready(readyNow)

function readyNow(){
console.log('Hello World');
$('#submit').on('click', submitData);
$('.type').on('click', 'button', inputType)

$.ajax({
    method: "POST",
    url: "/numbersin",
    data: {
        number1: x,
        number2: y,
        type: type
    }
});
}


var x;
var y;
function submitData(){
x = $('#inputOne').val();
y = $('#inputTwo').val();
return x;
return y;
}

var type;
function inputType(){
type = $(this).data('method');
return type;
}

