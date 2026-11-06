/*

Ways to declare an Object
1. Object literal
2. Class level object(ES6)

3. Constructor function(ES6)
4.prototype based object

constructor function
====================
- constructor function used to create and initialize object
- constructor function should start with capital letter



*/
console.log("-----Object literal -------");

let product = {
    pid: 1010,
    pname : "Macbook Pro",
    price : 97895
}
console.log(product);

console.log("------class level object-------");
class Trainer
{
    id;
    tname;
    constructor(id,name)
    {
        this.id=id;
        this.tname=name;

    }
    getData()
    {
        console.log("id: ",this.id);
        console.log("Trainer:  ",this.tname);
    }
}

const t1=new Trainer(101, "priyanka");
t1.getData();
console.log("----- Consturctor function -------");

function Employee(id, name)
{
    this .id = id;
    this.name = name;

    this.show=function()//anonymous function//expression syntax
    {
        console.log("Emp id: ", this.id);
        console.log("Emp name: ", this.name);
    }
}
//object
let e1 = new Employee(222, "Era");
e1.show();

console.log("------- Prototype baesd object------");
//prototype based object required prototype (literal)
//Creates an object that has the specified prototype or that has null prototype.
let p2 = Object.create(product);
console.log(p2);

console.log(p2.pid);
console.log(p2.pname);
console.log(p2.price);

//Modify it
p2.id = 1212;
p2.pname = "Mobile";
p2.price = 97895; 
console.log(p2);


