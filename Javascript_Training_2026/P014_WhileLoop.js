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

//sum of the digits logic
//123

let num = 102, rem = 0, sum = 0;
while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    sum = sum + rem;
}
console.log("Sum of digits: ", sum);
console.log("---------------------------");
/*
let num1 = 123, rm =0, rev=0, temp = num1;
while (num>0)
{
    rm= num1%10;
    num1 = Math.floor(num1/10);
    rev = rev*10+rm;
}
console.log(`Reverse number of ${temp} is : ${rev}`);
*/

let num1=457356,rm=0,rev=0,temp=num1;

while(num1>0)
{
    rm=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rm;

}

console.log(`Reverse number of ${temp} is: ${rev} `);

/*
let reverseNum = 145;
let q, res = 0;
console.log(reverseNum);

while (reverseNum > 0) {
    rem = reverseNum % 10;
    q = Math.floor(reverseNum / 10);
    res = res * 10 + rem;
    reverseNum = q;
}
console.log("Reverse number: ", res);
//console.log('Reverse number:, ${rev}, res);
*/

//how to reverse any number
//how to check number is palindrome (HW)

//how to check number is armstrong number
console.log("------------------");
let num2=153, rem1, result=0, tp = num2;

while(num2>0)
{
    rem1 = num2%10;
    num2 = Math.floor(num2/10);
    result=result+rem1*rem1*rem1;   
}
console.log(tp);
console.log(result);

if(tp===result)
{
    console.log(`${tp} Its an Armstrong`);
}else
{
   console.log("It's not an Armstrong number");
}
