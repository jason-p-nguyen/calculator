let num1;
let operator;
let num2;
let results;

//add
function add(a, b) {
    return a + b
}

//subtraction
function subtract(a, b) {
    return a - b
}

//multiply
function multiply(a, b) {
    return a * b
}

//divide
function divide(a, b) {
    return a / b
}

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
    }
}

console.log(num1);
console.log(num2);
console.log(operator);

//set listener to button "1"
//set num1 to "1"
//test: output "num1 = 1" on the console log
//set num2 to "1"
//test: output "num2 = 1" on console log
const numbers = document.querySelectorAll(".number");
console.log(numbers)
numbers.forEach(number => number.addEventListener("click", (event) => {
    if (num1 === undefined) {
        num1 = parseInt(number.value);
        console.log(`num1: ${num1}`);
        return num1
    } else if (num2 === undefined) {
        num2 = parseInt(number.value);
        console.log(`num2: ${num2}`);
        return num2;
    }
}));

//set listener to button "+"
//set operator to "+"
//test: output "operator = +" on console log
const maths = document.querySelectorAll(".maths");
console.log(maths);
maths.forEach(math => math.addEventListener("click", (event) => {
    operator = math.value;
    console.log(operator);
    return operator;
}));

//set listener on "=" button to run operate()
//test: output results on console log
//display results on display
const equal = document.querySelector(".equal");
console.log(equal);
const display = document.querySelector("#display");
console.log(display);
equal.addEventListener("click", (event) => {
    results = operate(num1, num2, operator);
    console.log(`results: ${results}`);
    display.textContent = results;
    num1 = results;
});
