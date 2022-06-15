function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case 'addition':
            return add(firstNumber, secondNumber);
        case 'subtraction':
            return subtract(firstNumber, secondNumber);
        case 'multiplication':
            return multiply(firstNumber, secondNumber);
        case 'division':
            if (secondNumber === 0) {
                return "Cannot divide by zero";
            }
            return divide(firstNumber, secondNumber);
        default:
            return 'ERROR';
    }

}

let digitNodeList = document.querySelectorAll(".digit")

let display = document.querySelector(".display");

function displayNumber(number) {
        number = display.textContent;
        return number;
}

// digitNodeList.forEach((value) => {
    

// })