let num1;
let operator;
let num2;
let results;

function add(a, b) {
    return a + b
};

function subtract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    return a / b
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
    if (num1 === undefined) {
        num1 = parseInt(number.value);
        display.textContent = num1;
        console.log(`num1: ${num1}`);
        return num1
    } else if (num2 === undefined) {
        num2 = parseInt(number.value);
        display.textContent = num2;
        console.log(`num2: ${num2}`);
        return num2;
    };
}));

const maths = document.querySelectorAll(".maths");
maths.forEach(math => math.addEventListener("click", (event) => {
    operator = math.value;
    console.log(operator);
    return operator;
}));

//set listener on "=" button to run operate()
//test: output results on console log
//display results on display
const equal = document.querySelector(".equal");
const display = document.querySelector("#display");
equal.addEventListener("click", (event) => {
    results = operate(num1, num2, operator);
    console.log(`results: ${results}`);
    display.textContent = results;
    num1 = results;
    console.log(`num1: ${num1}`);
    num2 = undefined;
    console.log(`num2: ${num2}`);
});

// Clear results when pushing clear button
// Display snarky error message if user divides by 0
// Show NaN as ERROR
// BUG: Pressing = before entering all the numbers or an operator causes an ERROR.

// BUG: Button can only do single values at a time. Does NOT do two or more digits.