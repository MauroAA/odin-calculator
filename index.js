let currentValue = '';
let previousValue = '';
let operator = null;

const getButtons = document.querySelectorAll ('[data-number]');
const getOperators = document.querySelectorAll ('[data-operator]')
const clear = document.getElementById ('clear');
let displayValue = document.getElementById ('showNum');


getButtons.forEach ((button) => button.addEventListener ("click", () => appendNumber (button.textContent)));


function appendNumber (num) {
    if (displayValue.textContent === '0') {
        resetScreen ()
        displayValue.textContent += num
    } 
}

function resetScreen () {
    displayValue.textContent = ''
}



function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}


function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return add (a, b);
        case '-':
            return substract (a, b);
        case '*':
            return multiply (a, b);
        case '/':
            return divide (a, b);
    }
}