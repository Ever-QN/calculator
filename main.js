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

const digitBtns = document.querySelectorAll(".digit");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const equalsBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const clearEverythingBtn = document.querySelector(".clear-everything");
const clearInputBtn = document.querySelector(".clear-input");
let display = document.querySelector(".display");


let displayValue = display.textContent;
let clearedDisplay = true;

function clearDisplayValue() {
    clearedDisplay = true;
    display.textContent = "0";
    return displayValue = display.textContent;
}

function clearButtons() {
    clearEverythingBtn.addEventListener('click', () => {
        displayValue = 0;
    })
    clearInputBtn.addEventListener('click', () => clearDisplayValue());
}

function removeLastInput() {
    deleteBtn.addEventListener('click', () => {
        if (display.textContent === '0') {
            clearedDisplay = true;
            return display.textContent = '0';
        } else {
            displayValue = display.textContent = display.textContent.slice(0, -1);
        }
    })
}

function digitPressed() {
    for (let i = 0; i < digitBtns.length; i++) {
        digitBtns[i].addEventListener('click', () => {
            displayValue = display.textContent += digitBtns[i].textContent;
            if (clearedDisplay === true) {
                display.textContent = "";
                displayValue = display.textContent += digitBtns[i].textContent;
            }
            clearedDisplay = false;
        })
        
    }
}



function startCalculator() {
    removeLastInput();
    clearButtons();
    digitPressed();
}

startCalculator();