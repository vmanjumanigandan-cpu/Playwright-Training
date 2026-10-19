/*
Loop Assignments
========================
1.Prime Number
Problem Statement:
Write a JavaScript program to check whether a given number is prime or not using a loop.

2.Print Even Numbers
Problem Statement:
Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

3.Multiplication Table
Problem Statement:
Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

4.Factorial Number
Problem Statement:
Write a JavaScript program to calculate the factorial of a given positive integer using a loop.

5.Count Digits
Problem Statement:
Write a JavaScript program to count the total number of digits present in a given number using a loop.

6.Stop the Loop at a Specific Number
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.

7.Skip Even Numbers
Problem Statement:
Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

8.Print a 5 × 5 Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
*****
*****
*****
*****
*****

9.Decreasing Star Pattern
Problem Statement:
Write a JavaScript program using nested loops to print the following pattern:

*****
****
***
**
*
* */

/*
//Sum of the digits
console.log("----------Practice Program (Sum/palindrome/reverse/armstrong)------------");
let num = 1587851, rem = 0, sum = 0;
//Adding for reverse
let rev = 0, temp = num;
//Adding for Armstrong number
let res =0;

while(num>0)
{
    rem = num%10;
    num = Math.floor(num/10);
    //sum of digits
    sum = sum+rem;
    //reverse a number
    rev = rev*10+rem;
    //armstrong number
    res = res+rem*rem*rem;

}
console.log(`Sum of ${temp} is:  ${sum}`);
console.log("----------------------");
console.log(`Reverse of ${temp} is:  ${rev}`);
console.log("----------------------");
//if condition for armstrong number
if(res === temp)
{
    console.log(`${temp} is a Armstrong number`);   
}
else
{
    console.log(`${temp} is a not an Armstrong number`);
}
console.log("----------------------");
//if condition for palindrome
if (rev === temp)
{
    console.log(`${temp} is a palindrome...`);
}
else
{
    console.log(`${temp} is not a palindrome...`);
    
}
console.log("-----------------------------------");*/


console.log("--------------Loop Assignements--------------");
//# 1. Prime number or not
let primeNum = 53;
for (let i = 0; i<=(primeNum-1); i++)
{
    if (primeNum <=1)
    {
        console.log("Invalid number");
        break;
    }
    else if ((primeNum % 2 ===0) || (primeNum % 3 ===0))
    {
        console.log(`1. ${primeNum} is not a Prime Number`);
        break;
    }
    else
        {
        console.log(`1. ${primeNum} is a Prime Number`);
        break;
    }
}
console.log("----------------------");
//#2. Even number or not
console.log("2. Even numbers");
console.log("------------------");
for (let i =0; i<=50; i++)
{
    if (i %2==0)
    {
        console.log(`${i} is a Even number`);
    }
}
console.log("----------------------");

//#3. Multiplication table
let mnum = 5;// not added as input value
console.log("3. Multiplication table");

for (let m = 1; m<=10; m++)
{
    let res = m*mnum;
    console.log(`${ m} * ${ mnum} = ${res}`);
}
console.log("------------------------");
//#4. Factorial
let num1 = 6
let factNum = 1;
let res = factNum;
while(factNum<=(num1-1))
{
    res = res * factNum;
    factNum++;
}
console.log(`4. Factorial of ${factNum} is : ${res}`);
console.log("----------------------");
//#5. Count the number of digits
let num = 192, rem = 0, sum = 0, count = 0;
while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    sum = sum + rem;
    count ++
}
console.log("5. Count of digits:", count);
console.log("--------------------------");
//#6. print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10
console.log("6. prints 1 to 20 numbers using break to terminate");
for (let i=1; i<=20;i++)
{
    if(i===10)
    {
        break;
    }else{
        console.log(i);
    }
}
console.log("------------------------");
//#7. print numbers from 1 to 20, but skip all even numbers using the continue statement
console.log("7. prints odd numbers");
for (let i=1; i<=20;i++)
{
    if(i%2==0)
    {
        continue;
        
    }else{
        console.log(i);
    }
}
console.log("------------------------");
//#8. 5*5 Pattern 
console.log("8. 5*5 - Pattern ");
for (let i =0; i<=5; i++)
{
    let row =" ";
    for (let c =1; c<=5; c++)
    {
        row = row+" *";
    }
    console.log(row);
    
}
console.log("-------------------------------");                                               
//#9. pattern check 

for (let r=5; r>=1; r--)
{
    let row =" ";
    for(let c=1; c<=r;c++)
    {
        row = row + " *";
    }
    console.log(row);
}
console.log("-----------------------------");