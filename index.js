let num1 = '';
let num2 = '';
let operator = '';
const total = document.querySelector('.screen');
let inputString = '';
let final = '';

document.querySelector('#C').addEventListener("click", clear);
document.querySelector('#back').addEventListener("click", back);

document.querySelector('.container').addEventListener('click', function(event) {
    
    
    if  (event.target.id === 'one') {
        inputString += '1';
        total.textContent += '1';
    } else if (event.target.id === 'two') {
        inputString += '2';
        total.textContent += '2';
    } else if (event.target.id === 'three') {
        inputString += '3';
        total.textContent += '3';
    } else if (event.target.id === 'four') {
        inputString += '4';
        total.textContent += '4';
    } else if (event.target.id === 'five') {
        inputString += '5';
        total.textContent += '5';
    } else if (event.target.id === 'six') {
        inputString += '6';
        total.textContent += '6';
    } else if (event.target.id === 'seven') {
        inputString += '7';
        total.textContent += '7';
    } else if (event.target.id === 'eight') {
        inputString += '8';
        total.textContent += '8';
    } else if (event.target.id === 'nine') {
        inputString += '9';
        total.textContent += '9';
    } else if (event.target.id === 'zero') {
        inputString += '0';
        total.textContent += '0';
    } else if (event.target.id === 'doubleZero') {
        inputString += '00';
        total.textContent += '00';
    } else if (event.target.id === 'dot') {
        inputString += '.';
        total.textContent += '.';
    } else if (event.target.id === 'X') {
        inputString += 'X';
        total.textContent += ' X ';
    } else if (event.target.id === 'divide') {
        inputString += '/';
        total.textContent += ' ÷ ';
    } else if (event.target.id === 'plus') {
        inputString += '+';
        total.textContent += ' + ';
    } else if (event.target.id === 'minus') {
        inputString += '-';
        total.textContent += ' - ';
    } else if (event.target.id === 'percentage') {
        inputString += '%';
        total.textContent += ' % ';
    } else if (event.target.id === 'equals') {
        inputString += '=';
        total.textContent += ' = ';
        const elements = inputString.split(/[+\-X/]/);
        num1 = parseFloat(elements[0]);
        operator = inputString.match(/[+\-X/]/)[0];
        num2 = parseFloat(elements[1]);
        calculate(num1, num2, operator);
    }
});

function add (num1, num2) {
    final = parseFloat(num1) + parseFloat(num2);
    total.textContent = final;
}

function subtract (num1, num2) {
    final = parseFloat(num1) - parseFloat(num2);
    total.textContent = final;
}

function multiply (num1, num2) {
    final = parseFloat(num1) * parseFloat(num2);
    total.textContent = final;
}

function divide (num1, num2) {
    if (parseFloat(num2) === 0) {
        return total.textContent = "Can't divide by 0 bud";
    } else {
        final = parseFloat(num1) / parseFloat(num2);
        total.textContent = final;
    }
}

function percent(num1, num2, operator) {
    if (operator === '+') {
        final = parseFloat(num1) + (parseFloat(num1) * (parseFloat(num2) / 100));
        total.textContent = final;
    } else if (operator === '-') {
        final = parseFloat(num1) - (parseFloat(num1) * (parseFloat(num2) / 100));
        total.textContent = final;
    } else if (operator === 'X') {
        final = parseFloat(num1) * (parseFloat(num2) / 100);
        total.textContent = final;
    } else if (operator === '/') {
        if (parseFloat(num2) === 0) {
            total.textContent = "Error: Division by zero";
        }
        final = parseFloat(num1) / (parseFloat(num2) / 100);
        total.textContent = final;
    } else {
        total.textContent = "Error: Invalid operator";
    }
}

function clear () {
    total.textContent = '';
    inputString = '';
    final = '';
}

function back () {
    total.textContent = total.textContent.slice(0, -1);
    inputString = inputString.slice(0, -1);
}

function calculate (num1, num2, operator1, operator2) {
    switch (operator1) {

        case '+':
            add(num1, num2);
        break;

        case '-':
            subtract(num1, num2);
        break;

        case 'X':
            multiply(num1, num2);
        break;

        case '/':
            divide(num1, num2);
        break;       

        default: "Error";
            break;
            
    }

    if (operator2 != '' && operator2 == '%') {
        percent(num1, num2, operator1);
    }
}