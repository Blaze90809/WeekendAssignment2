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
})
.done(function(response){
    console.log('successfully sent math question');
    getMathAnswer();
})
}

function getMathAnswer() {
    $.ajax({
        method: 'GET',
        url: '/respondcalc'
    })
    .done(function(response) {
        console.log('successful response:' + response);
        appendMathAnswer(response);
    })
    .fail(function(msg, status){
console.log('error response: ', msg, status)
   
});
}
function appendMathAnswer(answer){
    answer = parseInt(answer.answer);
    $('#answer').empty();
    $('#answer').html('<p>' + 'answer: ' + answer + '</p>');
    console.log('<p>' + 'answer: ' + answer + '</p>');
};