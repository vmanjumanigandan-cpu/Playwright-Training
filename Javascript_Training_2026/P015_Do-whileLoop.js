/*
. do-while loop
================
- Exit controlled loop
- do while loop is applicable for one time iteration/execution
Scenario:one time execution 

Syntax
------
Initialization;
do{
    statement;
    increment/decrement
}while (condition);

*/
let i=1;
do{
    console.log("Hello");
    i++;
}while(i<=5);
console.log("---------------------");

let j=1;
do{
    console.log(j*j);
    j++;
} while(j>=5);