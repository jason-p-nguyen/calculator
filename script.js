let num1;
let operator;
let num2;

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
const button = document.querySelectorAll("button");
console.log(button)
button.forEach(button => button.addEventListener("click", (event) => {
    if (num1 === undefined) {
        num1 = button.value;
        console.log(num1);
        return num1
    } else if (num2 === undefined) {
        num2 = button.value;
        console.log(num2);
        return num2;
    }
}) )


//set listener to button "+"
//set operator to "+"
//test: output "operator = +" on console log
//set num2 to "1"
//test: output "num2 = 1" on console log
//set listener on "=" button to run operate()
//test: output results on console log
//display results on display