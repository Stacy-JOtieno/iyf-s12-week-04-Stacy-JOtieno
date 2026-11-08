// ===== Exercise 1: Number Operations =====
let a = 10;
let b = 3;

console.log("Addition:", a + b);          // 13
console.log("Subtraction:", a - b);       // 7
console.log("Multiplication:", a * b);    // 30
console.log("Division:", a / b);          // 3.3333333333333335
console.log("Modulus:", a % b);           // 1
console.log("Exponentiation:", a ** b);   // 1000

let count = 0;
count++;
console.log("After count++:", count);     // 1
count--;
console.log("After count--:", count);     // 0

// ===== Exercise 2: String Operations =====
let firstName = "Stacy";
let lastName = "Otieno";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

console.log("Full name:", fullName);
console.log(greeting);
console.log(message);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Includes 'Stacy'?", fullName.includes("Stacy"));

// ===== Exercise 3: Comparison & Logical Operators =====
console.log("5 > 3:", 5 > 3);             // true
console.log("5 < 3:", 5 < 3);             // false
console.log("5 === 5:", 5 === 5);         // true
console.log("5 == '5':", 5 == "5");       // true (loose equality, avoid)
console.log("5 === '5':", 5 === "5");     // false (strict equality catches the type difference)
console.log("5 !== 3:", 5 !== 3);         // true

console.log("true && true:", true && true);    // true
console.log("true || false:", true || false);  // true
console.log("!true:", !true);                  // false

// ===== Challenge: Age calculations =====
const birthYear = 2005;                   // <- use your real birth year
const currentYear = new Date().getFullYear();
const ageInYears = currentYear - birthYear;

const ageInDays = ageInYears * 365;
const ageInHours = ageInDays * 24;
const yearTurning100 = birthYear + 100;

console.log(`Age in years: ${ageInYears}`);
console.log(`Age in days (approx): ${ageInDays}`);
console.log(`Age in hours (approx): ${ageInHours}`);
console.log(`I'll turn 100 in the year: ${yearTurning100}`);

const birthDate = new Date("2005-06-12");   // <- your real birth date
const msPerDay = 1000 * 60 * 60 * 24;
const exactDays = Math.floor((new Date() - birthDate) / msPerDay);
console.log(`Exact age in days: ${exactDays}`);
console.log(`Exact age in hours: ${exactDays * 24}`);