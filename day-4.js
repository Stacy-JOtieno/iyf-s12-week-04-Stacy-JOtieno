// ===== Day 4: Remove Duplicates =====
console.log("--- Day 4: Remove Duplicates ---");

function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesSet(withDuplicates));      // [1, 2, 3, 4, 5]
console.log(removeDuplicatesFilter(withDuplicates));   // [1, 2, 3, 4, 5]