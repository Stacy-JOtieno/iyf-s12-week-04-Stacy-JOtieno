const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("1. Names:", names);
// ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// 2. Students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("2. High achievers:", highAchievers);
// Alice, Charlie, Diana, Eve

// 3. Find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log("3. Charlie:", charlie);
// { name: "Charlie", age: 23, grade: 90, major: "CS" }

// 4. Average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log("4. Average grade:", avgGrade);
// 86

// 5. CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("5. CS majors:", csMajors);
// Alice, Charlie, Eve

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("6. Sorted by grade:", sortedByGrade);
// Eve (95), Charlie (90), Diana (88), Alice (85), Bob (72)

// 7. Is any student's grade > 90?
const hasTopStudent = students.some(student => student.grade > 90);
console.log("7. Has a student above 90?", hasTopStudent);
// true (Eve, 95)

// 8. Are all students passing (grade >= 60)?
const allPassing = students.every(student => student.grade >= 60);
console.log("8. All passing?", allPassing);
// true