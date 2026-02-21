let num1 = [];
let parsedNum1;
let operator;
let num2 = [];
let parsedNum2;
let results;

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(num1, num2, operator) {
    if (operator === "add") {
        return add(num1, num2);
    }
    else if (operator === "subtract") {
        return subtract(num1, num2);
    }
    else if (operator === "multiply") {
        return multiply(num1, num2);
    }
    else if (operator === "divide") {
        return divide(num1, num2);
    }
    else {
        return "ERROR";
    };
};

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", (event) => {
    if (operator === undefined) {
            if (num1[0] === "0") {
                num1.shift();
            };
        num1.push(number.value);
        let joinedNum1 = num1.join("");
        display.textContent = joinedNum1;
        return parsedNum1 = parseInt(joinedNum1);

    } else if (operator !== undefined) {
            if (num2[0] === "0") {
                num2.shift();
            };
        num2.push(number.value);
        let joinedNum2 = num2.join("");
        display.textContent = joinedNum2;
        return parsedNum2 = parseInt(joinedNum2);
    } else {
        display.textContent = "ERROR";
    };
}));

const maths = document.querySelectorAll(".maths");
maths.forEach(math => math.addEventListener("click", (event) => {
    operator = math.value;
    return operator;
}));

const equal = document.querySelector(".equal");
const display = document.querySelector("#display");
equal.addEventListener("click", (event) => {
    if (operator === divide && parsedNum1 === 0 || parsedNum2 === 0) {
        alert("Sorry. This calculator can't divide by zero.")
        display.textContent = "ERROR 404";
    } else {
        results = operate(parsedNum1, parsedNum2, operator);
        display.textContent = results;
        parsedNum1 = results;
        num2 = [];
    };
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", (event) => {
    num1 = [];
    num2 = [];
    operator = undefined;
    parsedNum1 = undefined;
    parsedNum2 = undefined;
    results = undefined;
    display.textContent = 0;
});

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", (event) => {
    if (operator === undefined) {
        num1.pop();
            // Prevents display from showing no numbers
            if (num1.length < 1 || num1 === undefined) {
                num1.push("0");
            };
        let joinedNum1 = num1.join("");
        display.textContent = joinedNum1;
        return parsedNum1 = parseInt(joinedNum1);
    } 
    else if (operator !== undefined) {
        num2.pop();
            // Prevents display from showing no numbers
            if (num2.length < 1 || num2 === undefined) {
                    num2.push("0");
                };
        let joinedNum2 = num2.join("");
        display.textContent = joinedNum2;
        return parsedNum2 = parseInt(joinedNum2);
    }
});

// Show NaN as ERROR
// BUG: Pressing = before entering all the numbers or an operator causes an ERROR.
// round answers with long decimals so that they don’t overflow the display
// Add color change when math operator is hit.Remove color change when equals is hit.
// Add ability to add decimal point. Make sure they can only add one. Make sure it is disabled if there is already one.