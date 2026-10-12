/*  JS Operators
================
1. Arithmetic Operators - (+,-,*,/,%)

2. Unary operators - (++ (increment), -- (decrement))
 - pre increment/decrement - value will increment/decrement first and then we use it
 - post increment/decrement - value will use first and then increment/decrement it

3. Relational Operators - (>,<,>=,<=) for equal to, loose equality (==) and strict equality (===)

4. Ternary Operator /if else - (condition ? true : false;)

5. Logical Operators - [&& (AND) , || (OR), ! (NOT)]

6. short hand operators - -*/

console.log("--------Interview question-------");
console.log(90/0); //Infinity
console.log(-180/0); //-Infinity
console.log("Hello"/0); //NaN
console.log(undefined+100); //NaN
console.log(0/10); //0
console.log(0/0); //NaN
console.log(null/100);//0

//Number Constructor
console.log("------ Number Constructor ------");
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log("--------Arithmetic Operators---------------");
let num1 = 100, num2 = 20;
let result = num1 + num2;
console.log("Addition is:" + result);
console.log("Addition is:" + (num1 + num2));
console.log("Subtraction is:" + (num1 - num2));
console.log("Multiplication is:" + (num1 * num2));
console.log("Division is:" + (num1 / num2));
console.log("Modulus is:" + (num1 % num2));

console.log("------ Unary Operators ------");
/* ++ (Increment)
   --------------
1. Pre Increment  ++num1//  num1 = num1 + 1
- value will increment first and then we use it

2. Post Increment  - num1++// num1 = num1 + 1
- value will use first and then increment it

-- (Decrement)
-----------------
1. Pre Decrement  --num1//  num1 = num1 - 1
- value will decrement first and then we use it

2. Post Decrement num1--// num1 = num1 - 1
- value will use first and then decrement it */

//Pre Increment
let a =100;
console.log(a);
console.log(++a); //101
console.log(a); //101

//Post Increment
let b=200
console.log(b) // 200
console.log(b++); // 200
console.log(b); // 201
console.log(b++); // 201
console.log(b); // 202

let i = 199;
let j = i++;
console.log(i); //200
console.log(j); //199

let p = 678;
let q = p++;
console.log(p); //679
console.log(q); // 678

let r = 78; //r = 7
let s = ++r; // pre increment -- value increment and used  r = 79 => s = 79
console.log(r); //79
console.log(s);//79

let u=101;
let v = ++u;
console.log(u); //102
console.log(v); //102

//Pre Decrement
let c = 100;
console.log(c); //100
console.log(--c); //99
console.log(c); //99

//Post Decrement
let d = 300;
console.log(d); //300
console.log(d--); //300
console.log(d); //299

let e = 90;
let f = e--; //post decrement.
console.log("e value: ", e);//89
console.log("f value: ", f);//90

let m =10;
let n = --m + m--;
console.log("m value: ", m);
console.log("n value: ", n); 

let k = 20;
let l = k-- + k++;
console.log(k);
console.log(l); //arithemetic operators with unary operators


// Short Hand Assignment Operators

console.log("------------ short hand operators------------");
/*
+=, -=, *=, /=
*/

let t = 10;
console.log("t value: ", t);
t+=20;
console.log("t value after increment: ", t);//30

let y =100;
console.log("y value: ",y); //100
y-=50;
console.log("y value after decrement: ", y);//50

let h =10;
console.log("h value: ",h); //10
h*=2;
console.log("h value after multiply: ",h); //20

let w =80;
console.log("w value: ", w); //80
w/=4;//w = w/4
console.log("w value after divide:", w); //20

//Relational operators
console.log("------Relational Operators---------");

/* <, <=, >=, >, !==, !===
- Relational operators are always return boolean type results - true/false

Equality
=======
1. Loose equality (==) 
- value will be coerced(type will be converted)
and then compared

2. Strict equality (===)
- here values as it is compared no conversion
- value and type both will be compared

Test data
=========
c=99, u=v= 102, r=s= 79 e=89 f=90  */
console.log("Test data: ", "\n", "c=99","\n", "u=v= 102","\n","r=s= 79", "\n", "e=89", "\n", "f=90");

console.log("Greater than (u>f) >: "+(u>f)); //true
console.log("Greater than equal to (u>=v) >=: "+(u>=v)); //true
console.log("Greater than equal to (f>=c) : ", f>=c);//false
console.log("Less than (r<e) <: "+(r<e)); //true
console.log("Less than equal to (r<=s) <=: "+(r<=s)); //true
console.log("Less than equal to (c<=e) <=: ",c<=e);//false
console.log("Not equal to (u!=v)) != : "+(u!=v)); //false
console.log("Not equal to (r!=c) : ",r!=c);//true

//Equality
console.log("100" == 100); // true
console.log(undefined == null); // true

console.log("100" === 100); //false
console.log(undefined === null); //false

console.log("------ Logical Operators ---------");
/*
c1         c2       && (AND)         || (OR)              ! (NOT)
true       true      true            true                false
true       false     false           true                false
false      true      false           true                true
false      false     false           false               true

Test data
=========
c=99, u=v= 102, r=s= 79 e=89 f=90 
*/
//AND Operator
console.log("----------&&----------");
console.log((c>r) && (u===v));
console.log((f>c) && (c>=v));
console.log((r>=f) && (r===s));
console.log((e>=c) && (e===f));

//OR Operator
console.log("----------||----------");
console.log((c>r) || (u===v)); //true
console.log((f>c) || (c>=v)); //true
console.log((r>=f) || (r===s)); //true
console.log((e>=c) || (e===f)); //false

//NOT Operator - Technically apply for one condition
console.log("----------C1 !(NOT) ----------");
console.log((u===v));//true
console.log(!(u===v)); //false


//scenario: testing title of application
//For string equality use === strict equality operator
// In JS we dont have any string equality method

let actTitle = "Google";
let expTitle = "Google";
console.log("Equality: " +(actTitle === expTitle));


let actTitle1 = "Google";
let expTitle1 = "GoogleApp";
console.log((actTitle1 === expTitle1));    
console.log("Equality: " +(!(actTitle1 === expTitle1)));