const firstNumber = null;
const operator = null;
const secondNumber = null;

function sum (a, b) {
    return a + b
}

function rest (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}


function operate (operator, a, b) {
    switch (operator) {
        case '+':
            return sum (a, b)
        case '-':
            return rest (a, b);
        case '*':
            return multiply (a, b);
        case '/':
            console.log (divide (a, b));
    }
}