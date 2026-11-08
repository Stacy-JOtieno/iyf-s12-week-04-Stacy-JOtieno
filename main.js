// ===== Variable declarations =====
let name = "Stacy Otieno";
let age = 21;                         // <- put your real age
const birthYear = 2005;               // <- put your real birth year
let isStudent = true;
let favoriteColors = ["blue", "green", "black"];  // <- your colors
const today = new Date();

// ===== Logging with descriptive messages =====
console.log("My name is:", name);
console.log("My age is:", age);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

// ===== typeof checks =====
console.log("typeof name:", typeof name);               // string
console.log("typeof age:", typeof age);                 // number
console.log("typeof isStudent:", typeof isStudent);     // boolean
console.log("typeof favoriteColors:", typeof favoriteColors); // object (arrays are objects in JS!)
console.log("typeof today:", typeof today);             // object

// ===== let vs const =====
let score = 100;
score = 150;
console.log("Score after reassignment:", score);

const PI = 3.14159;
// PI = 3;  // TypeError: Assignment to constant variable
console.log("PI:", PI);