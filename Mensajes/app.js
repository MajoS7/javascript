const initialetter = document.querySelector('#initialetter');
const name1 = document.querySelector('#name');
const message = document.querySelector('#message');
const number = document.querySelector('#number');
const sendButtom = document.querySelector('#sendButton');
const displayMessage = document.querySelector('#displayMessage');

name1.addEventListener('keyup', captureLetter);

sendButtom.addEventListener('click', sendMessage)

function captureLetter() {
    initialetter.textContent = name1.value.charAt(0).toUpperCase();
}

message.addEventListener('keyup', captureMessage)

function captureMessage(){
    const numberLetters = message.value.length;
    let max_quantity = 200;
    let subtract = max_quantity-numberLetters;

    number.textContent=subtract;

    if (subtract<=50){number.style.color="red";}
    else{number.style.color="black";}
}


function sendMessage() {diplayMessage.textContent=message.value;}