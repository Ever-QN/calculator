// MADE BY QUYNH NGO LINK TO MY PROJECT: https://github.com/Ever-QN/calculator

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
                return "Cannot divide by 0";
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
const clearEntryBtn = document.querySelector(".clear-entry");
const clearAllBtn = document.querySelector(".clear-all");
const allBtns = document.querySelectorAll("button");
const decimalBtn = document.querySelector(".decimal");
const oppositeIntegerBtn = document.querySelector(".switch-sign"); 
const percentageBtn = document.querySelector(".percentage");
const inverseBtn = document.querySelector(".inverse");
const squareBtn = document.querySelector(".square");
const sqrtBtn = document.querySelector(".sqrt");
let display = document.querySelector(".display");


let displayValue = display.textContent;
let clearedDisplay = true;


// The function/loop below highlights the buttons on hover and click


for (let i = 0; i < allBtns.length; i++) {
    let originalFilter = allBtns[i].style.filter;
    allBtns[i].addEventListener('click', () => {
        allBtns[i].style.filter = "brightness(250%)";
        setTimeout(() => {
            allBtns[i].style.filter = originalFilter;
        }, 50)
    })
}

function keyboardEventHandler() {
    digitBtns.forEach((button) => {
        document.onkeyup = function(e) {
            if (clearedDisplay === true) {
                displayValue = display.textContent = "";
                clearedDisplay = false;
                switch (e.key) {
                    case '1':
                        displayValue = display.textContent += e.key
                    break;
                    case '2': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '3': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '4': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '5': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '6': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '7': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '8': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '9': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '0': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '.':
                        display.textContent = '0' + e.key;
                        displayValue = display.textContent;
                    break;
                    
                }
            } else if (clearedDisplay === false) {
                switch (e.key) {
                    case '1': 
                        displayValue = display.textContent += e.key;
                    break;
                    case '2': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '3': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '4': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '5': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '6': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '7': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '8': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '9': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '0': 
                        displayValue = display.textContent += e.key; 
                    break;
                    case '.':
                        displayValue = display.textContent += e.key;
                    break;
                }
                checkOverflowError();
            } else {
                return 0;
            }
            
        }
    })
}

keyboardEventHandler();

function clearDisplayValue() {
    equationBeingProcessed = false;
    clearedDisplay = true;
    display.textContent = "0";
    return displayValue = display.textContent;
}

function clearButtons() {
    clearEntryBtn.addEventListener('click', () => {
        clearDisplayValue();
    })
    clearAllBtn.addEventListener('click', () => { clearDisplayValue()
    firstInput = undefined;
    secondInput = undefined;
    result = undefined;
    storedOperation = undefined;
    equationBeingProcessed = false;
    });
    
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
        keyboardEventHandler();
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

// Keyboard functionality event here


// Abandoned concept, maybe come back to this in the future
// function showInputHistory(elementClassName, content) {
//     let element = document.createElement("div");
//     element.classList.add(elementClassName);
//     element.classList.add('prevInput');
//     let elementText = document.createTextNode(content);
//     element.appendChild(elementText);
//     element.style.color = 'grey';
//     element.style.display = 'flex';
//     element.style.justifyContent = 'flex-end';
//     element.style.padding = '7px';
//     container.insertBefore(element, display);
// }

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
    if (isNaN(parseInt(display.textContent))) {
        display.textContent = 'Does not exist!';
        disableButtons();
    }
    else if (display.textContent.includes("e") === true || display.textContent.length > 20) {
        display.textContent = 'Overflow!';
        disableButtons();
    }
}

function addDecimal() {
    decimalBtn.addEventListener('click', () => {
        clearedDisplay = false;
        display.textContent += ".";
        return displayValue = display.textContent;
    })
}

function switchSigns() {
    oppositeIntegerBtn.addEventListener('click', () => {
        if (display.textContent.includes("-")) {
            display.textContent = display.textContent.substring(1);
            return displayValue = display.textContent;
        } else {
        display.textContent = "-" + display.textContent;
        return displayValue = display.textContent;
        }
    })
}

//greenBtns() does not include the CE and C buttons, those are in a different function
function greenBtns() {
    percentageBtn.addEventListener('click', () => {
        display.textContent = display.textContent / 100;
        checkOverflowError();
        return displayValue = display.textContent;
    })
    inverseBtn.addEventListener('click', () => {
        display.textContent = 1 / display.textContent;
        checkOverflowError();
        return displayValue = display.textContent;
    })
    sqrtBtn.addEventListener('click', () => {
        display.textContent = Math.sqrt(display.textContent);
        checkOverflowError();
        return displayValue = display.textContent;
    })
    squareBtn.addEventListener('click', () => {
        display.textContent = Math.pow(display.textContent, 2);
        checkOverflowError();
        return displayValue = display.textContent;
    })
}

function disableButtons() {
    allBtns.forEach((button) => {
        button.disabled = true;
    })
    clearAllBtn.disabled = false;
    clearAllBtn.addEventListener('click', () => 
    allBtns.forEach((button) => {
        button.disabled = false;
    })
    )
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
        if (displayValue === 'Cannot divide by 0') {
        display.textContent = displayValue;
        disableButtons();
        }
    })
}

function startCalculator() {
    digitPressed();
    removeLastInput();
    clearButtons();
    operatorPressed();
    addDecimal();
    switchSigns();
    greenBtns();
}

startCalculator();

// MADE BY QUYNH NGO LINK TO MY PROJECT: https://github.com/Ever-QN/calculator

//On a side note, I don't think I'll ever do input history for this project. Maybe I will, but I'll leave the remaining code for future me just incase I do decide to do so. -Quynh June 18, 2022