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

const container = document.querySelector('.container');
const digitBtns = document.querySelectorAll(".digit");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const equalsBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const clearEverythingBtn = document.querySelector(".clear-everything");
const clearInputBtn = document.querySelector(".clear-input");
const allBtns = document.querySelectorAll("button");
let display = document.querySelector(".display");


let displayValue = display.textContent;
let clearedDisplay = true;

for (let i = 0; i < allBtns.length; i++) {
    let originalFilter = allBtns[i].style.filter;
    allBtns[i].addEventListener('click', () => {
        allBtns[i].style.filter = "brightness(250%)";
        setTimeout(() => {
            allBtns[i].style.filter = originalFilter;
        }, 50)
    })
}

function clearDisplayValue() {
    clearedDisplay = true;
    display.textContent = "0";
    return displayValue = display.textContent;
}

function clearButtons() {
    clearEverythingBtn.addEventListener('click', () => {
        clearDisplayValue();
        firstInput = undefined;
        secondInput = undefined;
        result = undefined;
        storedOperation = undefined;
        equationBeingProcessed = false;
    })
    clearInputBtn.addEventListener('click', () => clearDisplayValue());
}

function removeLastInput() {
    deleteBtn.addEventListener('click', () => {
        if (display.textContent === '0' || display.textContent.length <= 1) {
            clearedDisplay = true;
            return displayValue = display.textContent = '0';
        } else {
            displayValue = display.textContent = display.textContent.slice(0, -1);
        }
    })
}

function digitSpaceCheck() {
    if (display.textContent.length > 19) {
        let slicedValue = display.textContent.slice(0, -1);
        return displayValue = display.textContent = slicedValue;
    }
}

function digitPressed() {
    for (let i = 0; i < digitBtns.length; i++) {
        digitBtns[i].addEventListener('click', () => {
            displayValue = display.textContent += digitBtns[i].textContent;
            if (clearedDisplay === true) {
                displayValue = display.textContent = "";
                displayValue = display.textContent += digitBtns[i].textContent;
            }
            clearedDisplay = false;
            digitSpaceCheck();
        })
        
    }
}

function showInputHistory(elementClassName, content) {
    let element = document.createElement("div");
    element.classList.add(elementClassName);
    element.classList.add('prevInput');
    let elementText = document.createTextNode(content);
    element.appendChild(elementText);
    element.style.color = 'grey';
    element.style.display = 'flex';
    element.style.justifyContent = 'flex-end';
    element.style.padding = '7px';
    container.insertBefore(element, display);
}

let firstInput;
let secondInput;
let result;
let storedOperation;
let equationBeingProcessed = false;

function processEquation () {
    
    equationBeingProcessed = true;
        if (firstInput === undefined) {
            firstInput = displayValue;
            clearDisplayValue();
        } else if (firstInput != undefined && secondInput === undefined) {
            secondInput = displayValue;
            result = display.textContent = operate(storedOperation, +firstInput, +secondInput);
            displayValue = result;
            firstInput = result;
            clearedDisplay = true; // Technically cleared, new input allows for ease of access for inputs, replaces previous number instead of adding on to the next string
        } else if (firstInput != undefined && secondInput != undefined && firstInput === displayValue) {
            result = display.textContent = operate(storedOperation, +displayValue, +secondInput);
            displayValue = result;
            firstInput = result;
            clearedDisplay = true
        } else {
            secondInput = displayValue;
            result = display.textContent = operate(storedOperation, +firstInput, +secondInput);
            displayValue = result;
            firstInput = result;
            clearedDisplay = true; // Technically cleared, new input allows for ease of access for inputs, replaces previous number instead of adding on to the next string
        }
        
}

function checkOverflowError() {
    if (display.textContent === 'Overflow!') return 0; 
    if (display.textContent.includes("e") === true  || display.textContent.length > 20) return display.textContent = 'Overflow!';
}

function operatorPressed() {
    divideBtn.addEventListener('click', () => {
        // showInputHistory('divisor', 'hello world!');
        storedOperation = 'division';
        if (equationBeingProcessed === true) {
            return false;
        }
        processEquation();
    })
    multiplyBtn.addEventListener('click', () => {
        // showInputHistory('divisor', 'hello world!');
        storedOperation = 'multiplication';
        if (equationBeingProcessed === true) {
            return false;
        }
        processEquation();
        
    })
    subtractBtn.addEventListener('click', () => {
        // showInputHistory('divisor', 'hello world!');
        storedOperation = 'subtraction';
        if (equationBeingProcessed === true) {
            return false;
        }
        processEquation();
    })
    addBtn.addEventListener('click', () => {
        // showInputHistory('divisor', 'hello world!');
        storedOperation = 'addition';
        if (equationBeingProcessed === true) {
            return false;
        }
        processEquation();
    })
    equalsBtn.addEventListener('click', () => {
        // showInputHistory('divisor', 'hello world!');
        processEquation();
        checkOverflowError();
    })
}


function startCalculator() {
    digitPressed();
    removeLastInput();
    clearButtons();
    operatorPressed();
}

startCalculator();