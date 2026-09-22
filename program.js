let schoolName = "PVL High School";
let passingGrade = "80";
let studentCount = 3;
let highestGrade= 0;

let students = ["Yvone, Cristine, shairezz"];
let grades = ["92, 93, 95"];
let subjects = ["Spiking, Setting, Digging"];

console.log ("=== STUDENT GRADES ===");

for (let i = 0; i < students.length; i++){
    console.log(students[i] + ": " + grades[i]);
}

if(grades[0] >= passingGrade){
    console.log(students[0] + "passed");
} else {
    console.log(students[0] + "failed");
}

if(grades[2] >= 90){
    console.log(students[1] + "got an excellent grade!");
} else if (grades[1] >= passingGrade) {
    console.log(students[1] + "passed");
} else {
    console.log(students[1] + "failed");
}
    
if(grades[2] > grades[0]) { 
    console.log(students[2] + "scored higher than " + students[0]);
} else { 
    console.log(students[0]+ "scored higher than "+ students[2]);
 }

let index = 0;

while(index < grades.length){
    if (grades[index] > highestGrade);{
    highestGrade = grades[index];
    }
    index++;
}
 
console.log("Highest Grade:" + highestGrade);

console.log("=== SUBJECTS ===");

subjects.forEach(function(subject){
    console.log(subject);
});

let results = [];

for(let i = 0; i < grades.length; i++){
    if(grades[i] >= passingGrade){
        results.push("passed");
    } else {
        results.push("Failed");
    }
        
}

console.log ("=== RESULTS ===");
console.log(results);

console.log("School: " + schoolName);
console.log("Number of Students: " + studentCount);