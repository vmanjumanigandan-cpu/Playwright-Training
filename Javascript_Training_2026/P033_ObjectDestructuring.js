/*
Destructuring Array/JS Object (Playwright)

It is a clean way to extract elements from array/object and store it into variable


*/

//Array Destructuring

let products = ['Display','Keyboard','Mouse','Hardrive'];
//index            0            1       2       3   
let [p1] = products;
console.log(p1);

let [product1, product2]= products;
console.log(product1);
console.log(product2);

let [a1,a2,a3,a4] = products;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

//Use case: At the time of multiple window automation

let [childWindow]=Promise.all();










/*
console.log(products.slice(1));
console.log(products.slice(1,2));

//last 2 entries
console.log(products.slice(2));
console.log(products.slice(-2));*/





