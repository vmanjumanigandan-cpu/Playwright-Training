/*
Array
=====
- Array is dynamic data structure which store collection of data/elements
- As an array is non primitive and dynamic means size of array can vary
- single variable we used to strore collection of data
- Array is 0 index based

Syntax:
=======
let arrayVariable = [val1, val2, val3,..n];

Ways of declarations:
=====================
1. Array literal - refer directly to the value
2. Array constructor 
3. Array.of() .... added in ES6

Types of Array:
===============
1. Single dimension array(1D)
2. Multi dimension array(2D)

Iteration ways
=============
1. Simple for loop.
2. for .. of loop(Array)
3. for .. in loop(Object)

*/
console.log("-----------1. Array Literal-------------");

let areas = ["Mumbai","Delhi", "Pune"];

console.log(areas);
console.log(areas.length);

console.log("------- 2. Array constructor --------");
/*
Constructor
===========
- It is special method used to initialize object
- In JS class level object we create using new keyword
and during object creation we called constructor

Array constructor
=================
Syntax:
=======
let arrayVariableName = new Array(val1, val2, val3....n);

when Array constructor declared with one element/value if its number type
then that element will be considered as length of array
*/
let data = new Array(10,20,30,40,50);
console.log(data);
console.log(data.length);
console.log(data[3]);
console.log(data[9]);// beyond index - undefined
console.log("------------------------");

let marks = new Array(5);//length of the array if we declare it as single number
console.log(marks);//[<5 empty items]
console.log(marks.length);//5
console.log(marks[0]);//undefined
//how to fill empty array with value
console.log("-------------------------");

marks[0] = 100;
marks[1] =20.56;
marks[2] =89;
marks[3] =90;
marks[4] =66;
marks[5] =77;
console.log(marks);
console.log(marks.length);

console.log("------------------------");

let loc = new Array("Pune");
console.log(loc);
console.log(loc.length);
/* Range error - Invalid array length
let numericData = new Array(4.5)//considered as normal array item
console.log(numericData);
console.log(numericData.length);*/
console.log("--------------------------");

console.log("---------3. Array.of()-----------");
let id=Array.of(101,102,103,104,105);
console.log(id);
console.log(id.length);
console.log(id[4]);//105
console.log(id[5]);
console.log("---------------------------");

let sid=Array.of(10);
console.log(sid);
console.log(sid.length);//1
console.log(sid[0]);//10
console.log(sid[4]);//undefined
console.log("---------------------------");

let a1 =new Array(0);
console.log(a1);//[]
console.log(a1.length);//0
/* Range Error : Invalid array length
let b1 = new Array(-5);
console.log(b1);
console.log(b1.length); */









