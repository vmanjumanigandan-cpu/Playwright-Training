/* 
Simple if statement: validate single true condition

*/
console.log("Program started");
let currentYear = 2024;
if (currentYear === 2026)
{
    console.log("Current Year Matched!");
}
console.log("program end ....");
/*
BaseUrl validation
------------------
- test for protocol(https)
- url should not be null
- url equality

String validation
==================
1. For String equality use ===
2. For partial match use includes()

*/
let actUrl = "https://www.google.com";
if (actUrl.includes("https"))
{
    console.log("Base Url is valid....");
    
}
//equality check

let expUrl = "https://www.google.com";
if(actUrl === expUrl);
{
    console.log("BaseUrl is matched..");
}