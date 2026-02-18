let num1 = null;
let operator = null;
let num2 = null;

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
//set listener to button "1"
const button = document.querySelectorAll("button");
console.log(button)
button.forEach(button => button.addEventListener("click", (event) => {
    console.log(button.value);
}) )
//set num1 to "1"
//test: output "num1 = 1" on the console log
//set listener to button "+"
//set operator to "+"
//test: output "operator = +" on console log
//set num2 to "1"
//test: output "num2 = 1" on console log
//set listener on "=" button to run operate()
//test: output results on console log
//display results on display