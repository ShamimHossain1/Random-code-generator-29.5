
// random code generator

function generatePin() {
    const randomPin = Math.round(Math.random() * 1000000);
    return randomPin;
}

function getPin() {
    const pin = generatePin();
    pinString = pin + '';
    if (pinString.length === 6) {
        return pin;
    }
    else {

        return getPin();
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const generateDisplay = document.getElementById('generate-pin');
    generateDisplay.value = pin;

});


// code submit to check

document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const inputField = document.getElementById('input-pin');
    const previousTypedNumbers = inputField.value
    if (isNaN(numbers)) {
        if (numbers === '<' ) {
           const digits = previousTypedNumbers.split('');
           digits.pop();
           const newDigits = digits.join('');
           inputField.value = newDigits;


        }
        else if (numbers === 'C'){
            inputField.value = '';
        }


    }
    else {

        const newTypedNumbers = previousTypedNumbers + numbers;
        inputField.value = newTypedNumbers;



    }

});