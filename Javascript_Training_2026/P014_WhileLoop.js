/*2. while loop
=============
- Entry control loop
- when number of iterations are not fixed/unknown to you
Scenarios:
- pagination logic(webtable automation)
- pageload timeout logic

while loop - syntax
```````````````````
initialization
while (condition)
{
    statements
    increment/decrement
}
*/
let i =1;
while (i<=5)
{
    console.log("Hello");
    i++;
}
console.log("-------------------------");
//sum of the digits logic - //123
let num = 102, rem = 0, sum = 0;
while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    sum = sum + rem;
}
console.log("Sum of digits: ", sum);
console.log("-------------------------------");

//Reverse a number
let num1=457356,rm=0,rev=0,temp=num1;
while(num1>0)
{
    rm=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rm;
}
console.log(`Reverse number of ${temp} is: ${rev} `);
console.log("-----------------------------------");

//how to check number is armstrong number
let num2=153, rem1, result=0, tp = num2;

while(num2>0)
{
    rem1 = num2%10;
    num2 = Math.floor(num2/10);
    result=result+rem1*rem1*rem1;   
}
    //if condtition to check Armstrong number
if(tp===result)
{
    console.log(`${tp} Its an Armstrong`);
}else
{
   console.log("It's not an Armstrong number");
}
console.log("-----------------------------");
//how to check number is palindrome (HW)

if (rev === temp)
{
    console.log(`${temp} is a palindrome...`);
}
else
{
    console.log(`${temp} is not a palindrome...`);
    
}
console.log("-------------------------------");

/*
//Practice - Palindrome - All in one code

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
*/
