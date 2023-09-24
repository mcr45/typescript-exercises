/* : Create a class named Student in TypeScript. The class should define certain properties and methods.

Properties:
studentName: string
studentAge: number
studentGrade: number
Constructor:
The constructor should take in the above three properties when instantiating a new student object.
Methods:
displayInfo(): Log the student's name, age, and grade to the console.
isPassing(gradeThreshold: number): Takes in a grade threshold and returns a boolean indicating if the student's grade is above the threshold.
Starter Code:

typescriptCopy code */
/* class Studentu  */
// Define the properties here
/* let studentName: string
let studentAge: number
let studentGrade: number */
// Define the constructor here
// Define the displayInfo method here
// Define the isPassing method here
// Instantiate a new student object and call the methods to test your class
/*
With this, students can fill in the class details using the information provided. */
var Student = /** @class */ (function () {
    function Student(sName, sAge, sGrade) {
        this.studentName = sName,
            this.studentAge = sAge,
            this.studentGrade = sGrade;
    }
    Student.prototype.displayInfo = function () { return "".concat(this.studentAge, " ago, ").concat(this.studentName, " was born. Now he/she has ").concat(this.studentGrade); };
    Student.prototype.isPassing = function (gradeThreshold) {
        return gradeThreshold > 20 ? true : false;
    };
    return Student;
}());
