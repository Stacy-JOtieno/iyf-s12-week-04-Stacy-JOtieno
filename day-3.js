// Approach 3: for...of with the newest character added to the front
function reverseForOf(str) {
    let result = "";
    for (const char of str) {
        result = char + result;
    }
    return result;
}

console.log(reverseLoop("hello"));      // olleh
console.log(reverseBuiltIn("hello"));   // olleh
console.log(reverseForOf("hello"));     // olleh

// ===== Day 3: Find Largest Number =====
console.log("--- Day 3: Largest Number ---");


function findLargestLoop(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
