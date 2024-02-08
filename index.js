const num1 = '';
const num2 = '';
const operator = '';
const total = document.querySelector('.screen');
const inputString = '';

document.querySelector('#C').addEventListener("click", clear);
document.querySelector('#back').addEventListener("click", back);

function add (num1, num2) {
    return total.textContent = num1 + num2;
}

function subtract (num1, num2) {
    return total.textContent = num1 - num2;
}

function multiply (num1, num2) {
    return total.textContent = num1 * num2;
}

function divide (num1, num2) {
    if (num2 === 0) {
        return total.textContent = "Can't divide by 0 bud";
    } else {
    return total.textContent = num1 / num2;
    }
}

function percent(num1, num2, operator) {
    if (operator === '+') {
        return total.textContent = num1 + (num1 * (num2 / 100));
    } else if (operator === '-') {
        return total.textContent = num1 - (num1 * (num2 / 100));
    } else if (operator === '*') {
        return total.textContent = num1 * (num2 / 100);
    } else if (operator === '/') {
        if (num2 === 0) {
            return total.textContent = "Error: Division by zero";
        }
        return total.textContent = num1 / (num2 / 100);
    } else {
        return total.textContent = "Error: Invalid operator";
    }
}

function clear () {
    total.textContent = '';
}

function back () {
    total.textContent = total.textContent.slice(0, -1);
}

function calculate (num1, num2, operator1, operator2) {
    switch (operator1) {

        case '+':
            add(num1, num2);
        break;

        case '-':
            subtract(num1, num2);
        break;

        case '*':
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

calculate(2412312, 12, '/');