// ===== Day 2: Reverse a String =====
console.log("--- Day 2: Reverse a String ---");

// Approach 1: for loop, building the string backwards
function reverseLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}