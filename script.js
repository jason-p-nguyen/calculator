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
        num1.push(number.value);
        let joinedNum1 = num1.join("");
        display.textContent = joinedNum1;
        console.log(joinedNum1, typeof joinedNum1);
        return parsedNum1 = parseInt(joinedNum1);

    } else if (operator !== undefined) {
        num2.push(number.value);
        let joinedNum2 = num2.join("");
        display.textContent = joinedNum2;
        console.log(joinedNum2, typeof joinedNum2);
        return parsedNum2 = parseInt(joinedNum2);
    } else {
        display.textContent = "ERROR";
    };
}));

const maths = document.querySelectorAll(".maths");
maths.forEach(math => math.addEventListener("click", (event) => {
    operator = math.value;
    console.log(operator);
    return operator;
}));

const equal = document.querySelector(".equal");
const display = document.querySelector("#display");
equal.addEventListener("click", (event) => {
    results = operate(parsedNum1, parsedNum2, operator);
    console.log(`results: ${results}`);
    display.textContent = results;
    parsedNum1 = results;
    num2 = [];
});

// Clear results when pushing clear button
const clear = document.querySelector(".clear")

// Display snarky error message if user divides by 0
// Show NaN as ERROR
// BUG: Pressing = before entering all the numbers or an operator causes an ERROR.

// Add color change when math operator is hit.
    // remove color change when equals is hit.