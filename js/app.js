
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


// verify code

let wrongAttempts = 0;

document.getElementById('submit-btn').addEventListener('click', function(){

    const generateDisplay = document.getElementById('generate-pin');
    const generatePin = generateDisplay.value;

    const inputField = document.getElementById('input-pin');
    const inputPin = inputField.value;

    const wrong = document.getElementById('wrong');
    const correct = document.getElementById('correct');

   

    if (inputPin === '') {
        wrong.style.display = 'block';
        correct.style.display = 'none';
        setTimeout(function() {
            wrong.style.display = 'none';
        }, 3000);
        wrongAttempts++;
    }
    

    else if ( generatePin === inputPin){
       
        correct.style.display = 'block';
        wrong.style.display = 'none';
        setTimeout(function() {
            correct.style.display = 'none';
        }, 3000);
    }
    else{
        
        correct.style.display = 'none';
        wrong.style.display = 'block';
        setTimeout(function() {
            wrong.style.display = 'none';
        }, 3000);
        wrongAttempts++;

    }
    
    const getCount = document.getElementById('count');
    getCount.innerText = 3 - wrongAttempts;
    const count = getCount.innerText;
    if(count === '0'){
        document.getElementById('submit-btn').disabled = true;
        

    }





})