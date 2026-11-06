/*-----------------------------------------------------------------
JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500

Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200

Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:          
console.log(actual + expected);//10020

Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);

Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);

Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true

Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number

Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345

Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean

Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;

Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498*/

console.log("----------3. TypeCoercion Assignments ---------------");
//#1. UI Price and Quantity
let price = "500";
let quantity = "3";
let amount = String(price * quantity);
console.log(`1. Total amount: ${amount}`);
console.log("Type of amount: ", typeof(amount));
console.log("-------------------------------");

//#2. UI Price + Tax
let price2 = "1000";
let tax = "200";
let totalAmount = String(price2+tax);
console.log(`2. Total amount: ${totalAmount}`);
console.log("Type of amount: ", typeof(totalAmount));
console.log("-------------------------------");
//#3. Understand + Coercion
let actual = "100";
let expected = 20; 
let newValue = actual+expected;
console.log(`3. Adding string + number ${actual} + ${expected}: ${newValue}`);//10020
console.log("-------------------------------");
//#4.  Understand - Coercion
let actual1 = "100";
let expected1 = 20;
let newValue1 = actual1-expected1;
//What will be the output of:
console.log(`4. Subtract from string - number ${actual1} - ${expected1} : ${newValue1}`);
console.log("-------------------------------");
//#5. UI Value and Assertion
let actualPrice = "100";
let expectedPrice = 100;
//#5. Check the result of:
console.log("5. Loose/Strict Equality");
console.log(actualPrice == expectedPrice); // true - loose equality
console.log(actualPrice === expectedPrice); // false - strict equality
console.log("-------------------------------");
//#6. Fix the Assertion
console.log("6. Fix the Assertion");
let actualPrice3 = "500";
let expectedPrice3 = 500;
console.log(actualPrice3 === String(expectedPrice3));// changed number to String value
console.log("-------------------------------");
//#7. Environment Variable
let timeout = "30000";
//Convert it into a number and print:
let timeoutNum = Number(timeout);
let typeNum = typeof(timeoutNum);
console.log("7. ",timeoutNum);
console.log(`Type of ${timeoutNum} is : ${typeNum}`);
console.log("-------------------------------");




