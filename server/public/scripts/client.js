$(document).ready(readyNow)

function readyNow(){
console.log('Hello World');
$('#submit').on('click', submitData);
$('.type').on('click', 'button', inputType)


}
var type;
function inputType(){
type = $(this).data('method');
return type;
}

// var x;
// var y;
function submitData(){
var x = $('#inputOne').val();
var y = $('#inputTwo').val();

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
app.get(/)