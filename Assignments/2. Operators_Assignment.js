/*Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3);
2.console.log(1 + 2 + "3");
3.console.log("5" * true);
4.console.log(10 > 5 > 1);
5.let a = 2;
    let b = a++ + ++a;
    console.log(a, b);

6.let a = 3;
console.log(a++ + a++ + ++a);

7.console.log(5 * 2 == "10");

8.
let x = 1;
let y = ++x + x++ + x;
console.log(x, y);

9.console.log(10 > 5 && 20 < 30);

10.console.log(null || undefined || "Playwright");*/

// Answers
console.log("------ Answers -------");
//Question  #1
console.log("1. ",1 + "2" + 3);//123

//Question  #2
console.log("2. ", 1 + 2 + "3");//33

//Question  #3
console.log("3. ","5" * true);//5

//Question  #4
console.log("4. ", 10 > 5 > 1) //True // doubt

//Question  #5
let a = 2;
let b = a++ + ++a;  // a=2, a++ => 2 (a=3), ++a => 4, 2 + 4 => 6
console.log("5. ", a, b); // 4, 6

//Question #6
let c = 3;
// c=3, c++ -> 3++ => 3
// c=4, c++ -> 4++ => 4
// c=5, ++c -> ++5 => 6
//3+4+6 = 13
console.log("6. ", c++ + c++ + ++c); 

//Question  #7
//True - loose equality will convert number to string and give true answer
console.log("7. ",5 * 2 == "10");

//Question  #8
let x = 1;
//x=1, ++x -> ++1 => 2
//x=2, x++ -> 2++ => 2
//x=3
//2+2+3 = 7
let y = ++x + x++ + x;
console.log("8. ",x, y);//3,7

//Question  #9
console.log("9. ",10 > 5 && 20 < 30); //True, Both conditions are true

//Question  #10
console.log("10. ", null || undefined || "Playwright"); //(OR) returns first non false value - Playwright