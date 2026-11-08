// ===== Helper functions =====
function average(numbers) {
    const total = numbers.reduce((sum, n) => sum + n, 0);
    return total / numbers.length;
}

function round2(number) {
    return Number(number.toFixed(2));
}

// ===== The grade tracker =====
const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        if (this.getStudent(name)) {
            console.log(`Student "${name}" already exists.`);
            return null;
        }
        const student = { name, grades };
        this.students.push(student);
        return student;
    },

    // Get a student by name (or null)
    getStudent(name) {
        const found = this.students.find(
            student => student.name.toLowerCase() === name.toLowerCase()
        );
        return found || null;
    },

    // A student's average across all subjects
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) {
            return null;
        }
        const scores = Object.values(student.grades);
        if (scores.length === 0) {
            return null;
        }
        return round2(average(scores));
    },

    // Class average for one subject
    getSubjectAverage(subject) {
        const scores = this.students
            .filter(student => typeof student.grades[subject] === "number")
            .map(student => student.grades[subject]);

        if (scores.length === 0) {
            return null;
        }
        return round2(average(scores));
    },

    // Student with the highest overall average
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }
        return this.students.reduce((best, student) => {
            return this.getStudentAverage(student.name) > this.getStudentAverage(best.name)
                ? student
                : best;
        });
    },

    // Students with an average below 70
    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },

    // Letter grade for a score
    getLetterGrade(score) {
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
    },

    // Formatted report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) {
            return `No student found with the name "${name}".`;
        }

        const lines = [];
        lines.push(`===== Report Card: ${student.name} =====`);

        for (const [subject, score] of Object.entries(student.grades)) {
            const label = subject.charAt(0).toUpperCase() + subject.slice(1);
            lines.push(`${label}: ${score} (${this.getLetterGrade(score)})`);
        }

        const avg = this.getStudentAverage(student.name);
        lines.push("-----------------------------");
        lines.push(`Average: ${avg} (${this.getLetterGrade(avg)})`);

        return lines.join("\n");
    }
};

// ===== Test your implementation =====
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // { name: "Alice", grades: {...} }
console.log(gradeTracker.getTopStudent().name);            // Alice
console.log(gradeTracker.getStrugglingStudents());         // [ { name: "Charlie", grades: {...} } ]
console.log(gradeTracker.generateReportCard("Alice"));

// Extra checks
console.log(gradeTracker.getStudent("Zed"));               // null
console.log(gradeTracker.getLetterGrade(85));              // B
console.log(gradeTracker.generateReportCard("Zed"));       // No student found...