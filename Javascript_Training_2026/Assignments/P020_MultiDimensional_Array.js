//Multi dimensional Array
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

console.log("--------- 1D Array ----------");

let id = [10,20,30,40];
console.log(id);   
console.log(id.length);

console.log("---------2D Array --------");
let userCredential = [
    ["Admin", "admin123"],
    ["Kiran","test123"],
    ["Sneha","test123"],
    ["Kim", "test123"]
]
console.log(userCredential);

//number of rows
console.log("Number of rows: ", userCredential.length); //4
// row -> cell -> value
console.log("Number of columns: ", userCredential[0].length);


let userCredential2 = [
    ["Admin", "admin123"],
    ["Kiran","test123", 34],
    ["Sneha","test123", 28],
    ["Kim", "test123", 34]
]
console.log("Number of columns: ", userCredential2[0].length);