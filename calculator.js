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
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot take modulus by zero";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Tests
console.log(calculate(10, "+", 5));    // 15
console.log(calculate(10, "-", 5));    // 5
console.log(calculate(10, "*", 5));    // 50
console.log(calculate(10, "/", 5));    // 2
console.log(calculate(10, "/", 0));    // Error: Cannot divide by zero
console.log(calculate(10, "%", 3));    // 1
console.log(calculate(10, "%", 0));    // Error: Cannot take modulus by zero
console.log(calculate(2, "**", 8));    // 256
console.log(calculate(10, "^", 2));    // Invalid operator

const userNum1 = Number(prompt("Enter the first number:"));
const userOperator = prompt("Enter an operator (+, -, *, /, %, **):");
const userNum2 = Number(prompt("Enter the second number:"));

console.log(`${userNum1} ${userOperator} ${userNum2} =`, calculate(userNum1, userOperator, userNum2));