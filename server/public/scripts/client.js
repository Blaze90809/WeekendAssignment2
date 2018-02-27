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
    // $('#inputOne').val()
    inputTwo += value;
    console.log(inputTwo)
    $('#inputOne').val(inputTwo);
}
}

function inputType() {
    $('#inputOne').val('');
    type = $(this).data('method');
    secondInput = true;
    return type;
}

function submitData() {
    var x = inputOne;
    var y = inputTwo;

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
    $('#inputOne').val(answer);
    console.log('Your Answer: ' + answer);
};

function clearFunction() {
    $('.Input-field').html('<input type="text" id="inputOne"></input><br>');
    $('#answer').html("<div id='answer'><h2>Your Answer:</h2></div>");
    $('#inputOne').val('')
    secondInput = false;
    inputOne = '';
    inputTwo = '';
    return secondInput
}