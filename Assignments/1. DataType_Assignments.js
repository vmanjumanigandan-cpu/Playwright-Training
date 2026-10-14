/*Datatype Assignment
====================
1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.*/

console.log("====================");
console.log("Datatype Assignment");
console.log("====================");
console.log("1. Identify the datatype");
console.log("====================","\n");
//let num = 25;
let num = 25;
console.log("Value:", num,"\t", "Datatype:", typeof num);
let str = "JavaScript";
console.log("Value:", str,"\t", "Datatype:", typeof str);
let bool = true;
console.log("Value:", bool, "Datatype:", typeof bool);
let undef = undefined;
console.log("Value:", undef,"\t", "Datatype:", typeof undef);
let n = null;
console.log("Value:", n,"\t", "Datatype:", typeof n);
let float = 123.45;
console.log("Value:", float, "Datatype:", typeof float);
let bigInt = 12345678901234567890n;
console.log("Value:", bigInt, "\t","Datatype:", typeof bigInt);
let sym = Symbol("id");
console.log("Value:", sym, "\t", "Datatype:", typeof sym);

/*2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables*/

console.log("\n\n2. Create Variables of Different Datatypes");

let str1 = "Javascript Training - Assignment";
let num1 = 100;
let bool1 = false;
let undef1;
let n1 = null;
let bigInt1 = 12345678901234567890n;
let sym1 = Symbol("id");
let obj1 = {name: "Manjula", age: 25};

console.log("===========================================");

console.log("String:", str1);
console.log("Number:", num1);
console.log("Boolean:", bool1);
console.log("Undefined:", undef1);
console.log("Null:", n1);
console.log("BigInt:", bigInt1);
console.log("Symbol:", sym1);
console.log("Object:", obj1);

/*3. Predict the Output
Without running the code, predict the output:
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

Then execute the program and compare your answers.*/

console.log("3. Predict the Output");
console.log("======================");
console.log(typeof 100);
console.log(typeof "100");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);

/*4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.*/

console.log("\n\n4. Student Information");
console.log("=======================");

let studentName = "Manjula";
let studentAge = 25;
let studentPercentage = 85.5;
let hasCompletedCourse = true;
let studentGrade = "A";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Percentage:", studentPercentage);
console.log("Has Completed Course:", hasCompletedCourse);
console.log("Student Grade:", studentGrade);    

// Used object to store student information
console.log("\n\nUsing Object to store student information:");
console.log("===========================================");
let studentInfo = {
    name: "Manjula",
    age: 25,
    percentage: 85.5,
    hasCompletedCourse: true,
    grade: "A"
};
console.log("Student Information:", studentInfo);

/*5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.*/
console.log("\n5. Create two variables");
console.log("=======================");
let userName;
let userEmail = null;
console.log("userName:", typeof userName)
console.log("userEmail:", typeof userEmail);

/*Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?*/

console.log("\nAnswering the questions:");
console.log("==========================");
console.log("\n 1. What is the difference between undefined and null?");
let ans1 ="undefined means a variable has been declared without any value assigned, null means a variable explicitly mentioned has no value.";
console.log(ans1);

console.log("\n2. What does typeof userName return?");
let ans2 = "typeof userName returns 'undefined' because the variable has not assigned a value.";
console.log(ans2);

console.log("\n 3. What does typeof userEmail return?");
let ans3 = "typeof userEmail returns 'object' because null is considered an object in JavaScript.";
console.log(ans3);

console.log("\n 4. Why is typeof null considered unusual in JavaScript?");
let ans4 = "typeof null returns 'object' in JavaScript, which is a well-known legacy behavior in the language.";
console.log(ans4);