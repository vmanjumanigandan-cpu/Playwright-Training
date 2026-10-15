/*
These branching stmts help to divert the flow of the execution

break:
------
- break will only applicable on loop and switch case
- will not stop the execution, will help to exit from loop and switch case body/scope

continue:
---------
- continue statement is applicable on loops
-continue will skip certain part of the code and continue execution
 till the end of loop/condition satisfied

return:
-------
- return keyboard applicable for function
- return keyword used to return value/result from function
- return statement should be the last statement of the function
- return statement always return result to the calling function

*/

for (let i=1; i<=10;i++)
{
    if(i>=5)
    {
        break;//exit of from loop
    }
    else{
        console.log(i);        
    }

}

console.log("--------------------------");

for (let i=1; i<=10;i++)
{
    if(i>5)
    {
        break;//exit of from loop
    }
    else{
        console.log(i);        
    }

}
console.log("--------------------------");
for (let r=1; r<=4; r++)
{
    for (let c=1; c<=4;c++)
    {
        break;
    }
    console.log("Hi");
    
}
console.log("Hello");

console.log("--------------------------");

for (let i=1; i<=10;i++)
{
    if(i===8)
    {
        continue;
        //console.log("HI"); skip this line of code// not reachable
        
    }else{
        console.log(i);
    }
}
