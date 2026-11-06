/*
Any number if its divisible by 1 or by itself then only its a prime number
*/

let num =7;
let flag = true;

for(let i=2; i<num; i++)
{
    if(num %i === 0)
    {
        flag = false; //not prime
    }
}
if (flag === true)
{
    console.log(num," its a prime number..");
}else
{
    console.log(num," its a not a prime number..");
}