// ===== Exercise 1: Function styles =====

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(greet("Stacy"));      // Hello, Stacy!
console.log(add(5, 3));           // 8
console.log(multiply(4, 6));      // 24
console.log(divide(10, 2));       // 5
console.log(divide(10, 0));       // Cannot divide by zero

// ===== Exercise 2: Build these functions =====

// 1. Area of a rectangle
function calculateArea(width, height) {
    return width * height;
}

// 2. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 3. Even or odd
function isEven(number) {
    return number % 2 === 0;
}

// 4. Initials from a full name
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word.charAt(0))
        .join("")
        .toUpperCase();
}

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("Area:", calculateArea(5, 4));                    // 20
console.log("25°C in °F:", celsiusToFahrenheit(25));          // 77
console.log("Is 8 even?", isEven(8));                         // true
console.log("Is 7 even?", isEven(7));                         // false
console.log("Initials:", getInitials("Stacy Otieno"));        // SO
console.log("Reversed:", reverseString("JavaScript"));        // tpircSavaJ

// ===== Exercise 3: Default parameters =====
// Renamed so it doesn't overwrite the greet() from Exercise 1
function greetWithDefaults(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefaults());                // Hello, Guest!
console.log(greetWithDefaults("Alice"));         // Hello, Alice!
console.log(greetWithDefaults("Bob", "Hi"));     // Hi, Bob!

// ===== Build: calculateTip =====
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Tip on 2000 at default 15%:", calculateTip(2000));    // 300
console.log("Tip on 2000 at 20%:", calculateTip(2000, 20));       // 400