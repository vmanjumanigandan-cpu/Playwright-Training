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

console.log(" ----- Array literal----------");
let arr=[];
console.log(arr);
console.log(typeof arr); //object
//student ID scenario

let sid =[101,102,103,104,105];
console.log(sid);
console.log("Total ids are : "+sid.length);//5
console.log("----------------------------");

//to read single value from array
console.log(sid[3]);
console.log(sid[2]);
console.log(sid[8]); // Array is dynamic, 
//size is not fixed hence something not in the list is undefined

let empData = ["Saranga","Pune",'M',25, 8978789789, true];
//Index         0           1    2   3      4         5
console.log(empData);
console.log(empData.length);
console.log(typeof empData);//object
console.log(typeof empData[0]);//string
console.log(typeof empData[4]);//number
//single entry from the current array
console.log(empData[4]);

//Array Iteration
console.log("----- Iteration-----------");

//simple for loop
for (let i=0; i<=empData.length; i++)
{
    console.log(empData[i]);
}


//for .. of .. loop
console.log("-------for ... of loop-------");
/* for .. of loop 
==================
- Its applicable for array and string
- Iterates over values

Syntax
======
for(let i of arrayName)
{
    console.log(i);
}

*/

for (let i of empData)
{
    console.log(i);
    
}

console.log("---------for ... in loop---------");
/* for ... in loop
===================
- Its is applicable for object
- Iterates over keys or index

*/
for (let i in empData)
{
    console.log("At index: "+i+" value is "+empData[i]);
}
//JS Object

let user = {
    id :101,
    name: "Jay",
    profile:"qa"
}

for (let i in user)
{
    console.log(i); //keys
}