/*
Type casting
=============
- applicable for only string, number and boolean

- One type of data can be converted to 
another type of data is called type casting.

1. Implicit casting/Type coercion
=================================
- JS Engine will take care of this type of conversion 
- Automatic conversion 
- It is also known as Type coercion

2. Explicit casting/Type conversion
=================================
- It is manual conversion 
- In JS we use constructors
String()
Number()
Boolean()

Note:
====
for type conversion data type must be compatiable

Boolean Conversion
==================
1. truthy value
---------------
- Any true value in boolean context we called truthy
Eg: any non xero value, or any non empty string

2. falsy value
- Any false value in boolean context we called falsy value
- In JS 5 values comes under falsy
Ex"
0. "", (empty string), null, undefined, 

*/
console.log("----string conversion-------   ");
/* when an expression combine string, number and boolean values 
with + operator then number and boolean valuesa are automatically convert into string
and string concatenates these values

number /boolean -----> string


*/
let a="Hello"+100+true;//here 100 and true both coerced into string
console.log(a);
console.log(typeof a); // Implicit conversion

let b=100+true+"Hello";
console.log("b: ", b);
console.log(typeof b);// string coercion

let c =200+25+"hi"+100;
console.log("c: ", c);
console.log(typeof c);

let d = "200"+10;
console.log("d: ", d);
console.log(typeof d)

console.log(100+false+"50"+false);
console.log(("Name" + 50)+(10+30));

/*
Scenario : Validate the bill amount
test for amount should be less than 10000
*/

let bill = "Your total amount is 6000";
//extract bill amount  from bill
//string to number: Number()
//validate the number, assertion using if stmt
let arr = bill.split(" ");
console.log(arr);
let amt = arr[4];
let amount=Number(amt);

console.log(amount);

if (amount <= 10000) {
    console.log("Valid amount");
} else {
    console.log("Greater amount");
}

let code=411047;
let postalcode=String(code);
console.log(typeof postalcode);

console.log(Boolean("Jay"));
console.log(Boolean(190));
console.log(Boolean(-80));
console.log(Boolean("T"));

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
