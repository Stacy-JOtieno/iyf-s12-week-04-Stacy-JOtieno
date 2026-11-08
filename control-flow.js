// ===== Exercise 1: If/Else =====
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("95 ->", getGrade(95));   // A
console.log("82 ->", getGrade(82));   // B
console.log("71 ->", getGrade(71));   // C
console.log("65 ->", getGrade(65));   // D
console.log("40 ->", getGrade(40));   // F

// ===== Exercise 2: Switch =====
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log("Day 0:", getDayName(0));   // Sunday
console.log("Day 4:", getDayName(4));   // Thursday
console.log("Day 9:", getDayName(9));   // Invalid day

// ===== Exercise 3: Loops =====

// For loop
console.log("--- for loop ---");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop (counter renamed so it doesn't clash with main.js)
console.log("--- while loop ---");
let whileCount = 0;
while (whileCount < 5) {
    console.log(whileCount);
    whileCount++;
}

// For...of
console.log("--- for...of ---");
const colorList = ["red", "green", "blue"];
for (const color of colorList) {
    console.log(color);
}

// ===== Build these programs =====

// 1. Print numbers 1-100
console.log("--- 1 to 100 ---");
for (let n = 1; n <= 100; n++) {
    console.log(n);
}

// 2. Even numbers 1-50
console.log("--- Even numbers 1 to 50 ---");
for (let n = 2; n <= 50; n += 2) {
    console.log(n);
}

// 3. FizzBuzz
console.log("--- FizzBuzz ---");
for (let n = 1; n <= 100; n++) {
    if (n % 15 === 0) {
        console.log("FizzBuzz");
    } else if (n % 3 === 0) {
        console.log("Fizz");
    } else if (n % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
}

// 4. Triangle of stars
console.log("--- Star triangle ---");
const rows = 5;
for (let row = 1; row <= rows; row++) {
    console.log("*".repeat(row));
}

