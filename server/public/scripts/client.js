$(document).ready(readyNow)

function readyNow() {
    $('#submit').on('click', submitData);
    $('.type').on('click', 'button', inputType)
    $('#clear').on('click', clearFunction)
    $('.num-button').on('click', 'button', addInput)
}
var type;
var inputOne = '';
var inputTwo = '';
var secondInput = false;

function addInput() {
    var value
    value = $(this).data('method');
    if(secondInput === false){
    inputOne += value;
    console.log(inputOne)
    $('#inputOne').val(inputOne);
}
else {
    inputTwo += value;
    console.log(inputTwo)
    $('#inputTwo').val(inputTwo);
}
}

function inputType() {
    type = $(this).data('method');
    secondInput = true;
    return type;
}

function submitData() {
    var x = $('#inputOne').val();
    var y = $('#inputTwo').val();

    $.ajax({
        method: "POST",
        url: '/numbersin',
        data: {
            number1: x,
            number2: y,
            type: type
        }
    })
        .done(function (response) {
            console.log('successfully sent math question');
            getMathAnswer();
        })
}

function getMathAnswer() {
    $.ajax({
        method: 'GET',
        url: '/numbersin'
    })
        .done(function (response) {
            console.log('successful response:' + response);
            appendMathAnswer(response);
        })
        .fail(function (msg, status) {
            console.log('error response: ', msg, status)

        });
}
function appendMathAnswer(answer) {
    answer = parseInt(answer.answer);
    $('#answer').empty();
    $('#answer').html('<h2>Your Answer: ' + answer + '</h2>');
    console.log('Your Answer: ' + answer);
};

function clearFunction() {
    $('.Input-field').html('<input type="text" id="inputOne"><h3>First Number</h3></input><input type="text" id="inputTwo"><h3>Second Number</h3></input><br>');
    $('#answer').html("<div id='answer'><h2>Your Answer:</h2></div>");
    secondInput = false;
    inputOne = '';
    inputTwo = '';
    return secondInput
}