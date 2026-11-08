// ===== Exercise 1: Object basics =====
const person = {
    firstName: "Brian",
    lastName: "Kamau",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log("Dot notation:", person.firstName);        // Brian
console.log("Bracket notation:", person["lastName"]);  // Kamau
console.log("Nested:", person.address.city);           // Nairobi
console.log("Array inside object:", person.hobbies[1]); // coding

// Modifying properties
person.age = 31;
person.phone = "0712 345 678";   // add new property
delete person.isStudent;         // remove property

console.log("After changes:", person);

// ===== Exercise 2: Object methods =====
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log("add:", calculator.add(5, 3));            // 8
console.log("subtract:", calculator.subtract(5, 3));  // 2
console.log("multiply:", calculator.multiply(5, 3));  // 15

// ===== Exercise 3: Object iteration =====
const scores = {
    math: 95,
    english: 88,
    science: 92
};

console.log("Keys:", Object.keys(scores));       // ["math", "english", "science"]
console.log("Values:", Object.values(scores));   // [95, 88, 92]
console.log("Entries:", Object.entries(scores)); // [["math", 95], ["english", 88], ["science", 92]]

console.log("--- Looping through scores ---");
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// ===== Bonus: combine objects with array methods =====
const total = Object.values(scores).reduce((sum, s) => sum + s, 0);
const average = total / Object.keys(scores).length;
console.log("Total:", total);                      // 275
console.log("Average:", average.toFixed(2));       // 91.67