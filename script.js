let num1 = [];
console.log(num1);
let operator;
let num2 = [];
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
    //if num1 array is empty, add values to array
        // this won't work, because we need to keep adding until an operator is selected
    //else use num2 array
    //ISSUE: how to call the correct array?
        //do I create a function?
        //
    if (operator === undefined) {
        //push value to array
        num1.push(number.value);
        console.log(`num1: ${num1}`);
        //concat values into array
        let joinedNum1 = num1.join("");
        console.log(`joinedNum1: ${joinedNum1}`);
        //parse values into int
        parseInt(joinedNum1);
        console.log(typeof joinedNum1);
        //display.textContent = num1
        display.textContent = joinedNum1;
        //this should be repeatable until an operator is selected
    } else if (operator !== undefined) {
        //push value to array
        num2.push(number.value);
        console.log(`num2: ${num2}`);
        //concat values into array
        let joinedNum2 = num2.join("");
        console.log(`joinedNum2: ${joinedNum1}`);
        //parse values into int
        parseInt(joinedNum2);
        console.log(`joinedNum2 type: ${typeof joinedNum2}`);
        //display.textContent = num1
        display.textContent = joinedNum2;
        //this should be repeatable until an operator is selected

    }
));




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
const clear = document.querySelector(".clear")

// Display snarky error message if user divides by 0
// Show NaN as ERROR
// BUG: Pressing = before entering all the numbers or an operator causes an ERROR.

// BUG: Button can only do single values at a time. Does NOT do two or more digits.
    //1. Set num1 as arrays. 
        // The assumption is that it will allow to display the number is you join them. e.g. press 1, press 2 = 12.
        // Additionally, this would allow for a 'backspace' function, that would pop the last number input.
    //2. Concatenate into a number and update display as an number.
    //3. Allow numbers to be kept being input until the number hits edge of the display box OR an operator is added.
    //4. Repeat the process above for num2.

// Add color change when math operator is hit.
    // remove color change when equals is hit.