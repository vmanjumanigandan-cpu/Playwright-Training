/* Loop
========
Loop is used for repeating statements to number of iterations

1. for loop
===========
- when number of iterations are fixed/known 
Scenarios: 
- calender/date picker 30 or 31, /28/29
- dropdown, list, menu with fixed number of options

2. while loop
=============
- Entry control loop
- when number of iterations are not fixed/unknown to you
Scenarios:
- pagination logic(webtable automation)
- pageload timeout logic

3. do-while loop
================
- Exit controlled loop
- do while loop is applicable for one time iteration/execution
Scenario:one time execution 

Working Array/Object
=======================
4. for .. of loop
------------------
- for of loop iterates over values and it is applicable for array/string

5. for .. in loop
------------------
- for in loop iterates over keys and index, it is applicable for object

For loop - Syntax:
``````````````````
for (initialization; condition;increment/decrement)
{
    statement;
}

*/
//prints 5 times
for (let i=1; i<=5; i++)
{
    console.log("Hello all");
    
}
console.log("------------------");

//print 1 to 10 numbers
for (let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("------------------");

//print 10 to 1 numbers
for (let i=10; i>=1; i--)
{
    console.log(i);
}
console.log("------------------");

//by default for loop condition is true, below code execute infinite times
/*
for (;;)
{
    console.log("Welcome");
    
}
*/

/* Factorial of number
5!  = 5*4*3*2*1 = 120
*/
let fact=1
for (let i=5;i>=1;i--)

{
    fact = fact*i;
    //console.log("inner stmt: ",fact)
}
console.log("Fact of 5: ", fact);
console.log("------------------");

//sum of 100 natural numbers
//1+2+3+.. +100 = 5050
let sum=0
for(let i=1; i<=100; i++)
{
    sum = sum+i;
    //console.log("inner value: ",sum);
    
}
console.log("Sum of 100 natural numbers is: ", sum);

console.log("---- Loop +condition -------");
//print all even numbers upto 20

for (let i=1; i<=20; i++){
    if (i % 2 === 0 ){
        console.log("Even numbers: ",i);
    }
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Even numbers: ",i);
    }
}