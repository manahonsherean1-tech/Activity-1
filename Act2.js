// ==========================================
// 1. ABSTRACTION (1)
// Abstract Base Class: Course (hides implementation details for calculating final grade)
// ==========================================
class Course {
  #courseCode; // ENCAPSULATION (1): Private field

  constructor(courseCode, name) { // CONSTRUCTOR (1)
    if (this.constructor === Course) {
      throw new Error("Cannot instantiate abstract class Course directly.");
    }
    this.#courseCode = courseCode;
    this.name = name;
  }

  // Abstract Method (MUST be implemented by child classes)
  calculateFinalGrade(score) {
    throw new Error("Method 'calculateFinalGrade()' must be implemented.");
  }

  getCourseCode() {
    return this.#courseCode;
  }
}

// ==========================================
// 2. INHERITANCE (1/2) & POLYMORPHISM (1)
// Child Class 1: CodingCourse inherits from Course
// ==========================================
class CodingCourse extends Course {
  constructor(courseCode, name, language) {
    super(courseCode, name);
    this.language = language;
  }

  // METHOD (1) & POLYMORPHISM (Overriding calculateFinalGrade)
  calculateFinalGrade(score) {
    // Coding courses grant a 5-point bonus for clean code
    return Math.min(100, score + 5);
  }
}

// ==========================================
// INHERITANCE (2/2)
// Child Class 2: TheoryCourse inherits from Course
// ==========================================
class TheoryCourse extends Course {
  constructor(courseCode, name) {
    super(courseCode, name);
  }

  // METHOD (2) & POLYMORPHISM (Overriding calculateFinalGrade)
  calculateFinalGrade(score) {
    // Standard grading scale for theoretical subjects
    return score;
  }
}

// ==========================================
// 3. CLASS (3/4) & ENCAPSULATION (2/2)
// Class: Student
// ==========================================
class Student {
  #gpa; // ENCAPSULATION (2): Private field to prevent direct invalid modification

  constructor(id, name, initialGpa) { // CONSTRUCTOR (2)
    this.id = id;
    this.name = name;
    this.#gpa = initialGpa;
  }

  // METHOD (3)
  setGpa(newGpa) { // CONDITIONAL (1)
    if (newGpa >= 0.0 && newGpa <= 4.0) {
      this.#gpa = newGpa;
    } else {
      console.log(`[Error] Invalid GPA ${newGpa} for ${this.name}`);
    }
  }

  // METHOD (4)
  getGpa() {
    return this.#gpa;
  }
}

// ==========================================
// 4. CLASS (4/4)
// Class: CSDepartment
// ==========================================
class CSDepartment {
  // METHOD (5)
  evaluateStudentPerformance(student, finalScore) {
    // CONDITIONAL (2)
    if (finalScore >= 90) {
      return `${student.name} received an A! Outstanding performance!`;
    } else if (finalScore >= 90) {
      return `${student.name} passed with a good score!`;
    } else {
      return `${student.name} needs additional review.`;
    }
  }
}

// ==========================================
// 5. OBJECT LITERALS (2)
// ==========================================
const departmentConfig = { // OBJECT LITERAL (1)
  deptName: "Computer Science ",
  semester: "School year 2026-2027",
  maxCapacity: 80
};

const gradingRubric = { // OBJECT LITERAL (2)
  passingScore: 75,
  honorRollScore: 90
};

// ==========================================
// 6. VARIABLES / PROPERTIES (3 min required)
// ==========================================
let totalEnrolled = 0;
let averageGrade = 0;
let passCount = 0;
 
// ==========================================
// 7. ARRAYS (3)
// ==========================================
const availableCourses = [ // ARRAY (1)
  new CodingCourse("CS101", "Introduction to JavaScript", "JavaScript"),
  new CodingCourse("CS201", "Data Structures & Algorithms", "C++"),
  new TheoryCourse("CS301", "Operating Systems Theory")
];

const enrolledStudents = [ // ARRAY (2)
  new Student("S101", "Yvone", 1.8),   // OBJECT (1)
  new Student("S102", "Shairezz", 1.4),     // OBJECT (2)
  new Student("S103", "Lyka", 1.2), // OBJECT (3)
  new Student("S104", "Joycel", 1.1)    // OBJECT (4)
];

const rawScores = [95,90,93,94]; // ARRAY (3)

// ==========================================
// 8. LOOPS (3) & CONDITIONAL (3)
// Execution & Demonstration
// ==========================================

console.log(`=== Welcome to ${departmentConfig.deptName} (${departmentConfig.semester}) ===\n`);

// LOOP (1): For-of loop to list courses
console.log("--- Available CS Courses ---");
for (const course of availableCourses) {
  console.log(`Course Code: ${course.getCourseCode()} | Name: ${course.name}`);
}

// LOOP (2): Standard for loop to calculate final grades using Polymorphism
console.log("\n--- Polymorphic Grade Adjustments ---");
for (let i = 0; i < availableCourses.length; i++) {
  const course = availableCourses[i];
  const sampleScore = 86;
  const finalGrade = course.calculateFinalGrade(sampleScore);
  console.log(`Course: ${course.name} | Base Score: ${sampleScore} -> Adjusted Grade: ${finalGrade}`);
}

// LOOP (3): ForEach loop to evaluate student results
console.log("\n--- Evaluating Enrolled Students ---");
const csDept = new CSDepartment();
let totalScoreSum = 0;

enrolledStudents.forEach((student, index) => {
  const score = rawScores[index];
  totalScoreSum += score;
  totalEnrolled++;

  // CONDITIONAL (3)
  if (score >= gradingRubric.passingScore) {
    passCount++;
  }

  const result = csDept.evaluateStudentPerformance(student, score);
  console.log(`[Student ${student.id}] ${result} (GPA: ${student.getGpa()})`);
});

averageGrade = totalScoreSum / totalEnrolled;

console.log("\n--- Department Summary ---");
console.log(`Total Students Enrolled: ${totalEnrolled}`);
console.log(`Students Passed: ${passCount}`);
console.log(`Class Average Raw Score: ${averageGrade.toFixed(2)}`);