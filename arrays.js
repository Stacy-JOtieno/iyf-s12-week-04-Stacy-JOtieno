// ===== Exercise 1: Array basics =====
const fruits = ["apple", "banana", "orange"];
const mixed = ["hello", 42, true, null];

console.log("First fruit:", fruits[0]);       // apple
console.log("Number of fruits:", fruits.length); // 3
console.log("Mixed array:", mixed);

fruits.push("grape");
console.log("After push:", fruits);           // apple, banana, orange, grape

fruits.unshift("mango");
console.log("After unshift:", fruits);        // mango, apple, banana, orange, grape

fruits.pop();
console.log("After pop:", fruits);            // mango, apple, banana, orange

fruits.shift();
console.log("After shift:", fruits);          // apple, banana, orange

// ===== Exercise 2: Array methods =====
const numbers = [1, 2, 3, 4, 5];

console.log("--- forEach ---");
numbers.forEach(num => console.log(num * 2));

const doubled = numbers.map(num => num * 2);
console.log("map (doubled):", doubled);       // [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter (even):", evenNumbers);   // [2, 4]

const firstEven = numbers.find(num => num % 2 === 0);
console.log("find (first even):", firstEven); // 2

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce (sum):", sum);            // 15

console.log("includes 3?", numbers.includes(3)); // true

// ===== Build: use array methods =====
const myNumbers = [5, -3, 12, 8, -1, 20, 4];

// 1. Double all numbers
const doubledNumbers = myNumbers.map(n => n * 2);
console.log("1. Doubled:", doubledNumbers);
// [10, -6, 24, 16, -2, 40, 8]

// 2. Filter out negative numbers
const nonNegative = myNumbers.filter(n => n >= 0);
console.log("2. No negatives:", nonNegative);
// [5, 12, 8, 20, 4]

// 3. First number greater than 10
const firstOver10 = myNumbers.find(n => n > 10);
console.log("3. First over 10:", firstOver10);
// 12

// 4. Product of all numbers
const product = myNumbers.reduce((total, n) => total * n, 1);
console.log("4. Product:", product);
// 5 * -3 * 12 * 8 * -1 * 20 * 4 = 115200