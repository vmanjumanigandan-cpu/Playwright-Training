/*ladder if statement will help to execute multiple conditions
*/
//find largest number among 3 numbers
console.log("-----ladder if------");
let num1 =500, num2 =200, num3 =700;

if ((num1 > num2) && (num1 > num3)) 
{
    console.log(`${num1} is greater than ${num2} and ${num3}`);
} 
else if ((num2 > num1) && (num2 > num3)) 
    
{
    console.log(`${num2} is greater than ${num1} and ${num3}`);
} 
else if ((num1 === num2) && (num2 === num3)) 
{
    console.log("All numbers are equal");
}
else 
{
    console.log(`${num3} is greater than ${num1} and ${num2}`);
}

// Playwright supports parallel testing
//TEst case should execute as per browser
/**
 * String comparison
 * ================
 * Strict equality ===
 * 
 
string conversion
=================
.toUppercase() -> Converts to 
console.log("Manju".toUpperCase());
console.log("MANJU".toLowerCase());
 */

let browserName = "WEBKIT".toLowerCase();
if (browserName === "Chromium")
{
    console.log("Test case is executing on Chromium");
}else if(browserName === "webkit")
{
    console.log("Test case is executing on webkit");
}else if(browserName === "firefox")
{
    console.log("Test case is executing on firefox");
}else
{
    console.log("By default session should start with chrome browser");
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


