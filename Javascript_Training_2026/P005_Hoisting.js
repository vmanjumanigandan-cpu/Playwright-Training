/* Hoisting 
 - It is behaviour for JS langauage where variable and functions are hoisted
 - declaration process first before execution

Var - fully hoisted
- var type variable and function declaration is fully hoisted
- let/const vaiables and funciton expression syntax(anonymous function, arrow function)
these are part of temporal dead zone, so before initialization if you try to call
it you will see reference error.

=====================================================
memory;
var - execution stack
1. Declaration phase
Inside memory, it has Identifier and its value.

2. Execution phase
Id and its value

var fname = "Kiran"; // here declaration and intialization happens together

eg:
console.log("lname"); //
var lname = "sharma"; // inside at the time of execution , lname is stored as undefined


let and const - different behaviour
keword with TDZ - Temporal Dead Zone
the time period from variable declaration to variable initialization
console.log(age);
let age = 20;

var and fun declaration - fully hoisted
let/const/Anonymous and Arrow function - Error // Reference error




*/
console.log(fname);
var fname="kiran";
console.log(fname);

//let - TDZ Zone 
//is hoisted but available into TDZ 
console.log("-----------------------");
//console.log(age);// Reference error: 
let age = 20;
console.log(age);
console.log("-----------------------");
//const : Is hoisted byt available into TDZ
//console.log(clgName);//Reference error
const clgName= 'AIS';
console.log(clgName);
console.log("-----------------------");
// Hoisting is the default beheviour of moving declarations 
/*
creation phase: 
execution phase:
TDZ?
time between when a variable is hoisted and when its initialized(assigned a value) in the error
During this period, accessing the variable throw a reference error.


*/
console.log("Function hoisting");
console.log("-----------------------");
//fully hoisted 
test1();
//test2(); Missing intialization error
function test1()
{
    console.log("test1() is calling..");
    
}
//call
test1()

console.log("------------Anonymous fun-----------");
/*const test2() = function()
                    {
                        console.log("This is anonymous function calling..");
                    }
test2();                    
*/

//arrow
let test3 = () => {
    console.log("This is arrow function is calling...")
}

test3();
//test4();//Typeerror : test4 is not a function
/* if you use modern syntax function with var type variable then 
will get type error*/

var test4 = function()
                {
                    console.log("THis is var type function");
                }

//call
//test4();
