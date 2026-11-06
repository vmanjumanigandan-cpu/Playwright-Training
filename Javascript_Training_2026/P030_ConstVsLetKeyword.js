/* variable

- for object declartion we can use let or const keywords
- all the operations we can perform on both variables and 
in case of const : only reference is immutable

reference : memory generated for that object

*/
//variable
let fname = "Sunitha";
//let fname = "Sunitha";//Cannot redeclare block-scoped variable 'fname'.
fname = "Suresh"; //reassignment is allowed
console.log(fname);

const orgName = "BeizzTech";
//const orgName = "BeizzTech";//Cannot redeclare block-scoped variable 'orgName'.
//orgName = "HSBC"; //TypeError : Assignment to constant variable.
//
// Object
let user1 = {
    id :1010,
    fname : "Kiran"

}
console.log(user1);
//read property of object 
console.log(user1.id);//{ id: 1010, fname: 'Kiran', phno: 9789456787 }

//insert new property
user1.phno = 9789456787
console.log(user1);//{ id: 1010, fname: 'Mahesh', phno: 9789456787 }

//modify existing property
user1.fname = "Mahesh";
console.log(user1); //{ id: 1010, fname: 'Mahesh' }

//delete the property
delete user1.phno;
console.log(user1);
const user2 = {
    id:2020,
    fname : "Sameer"
}
//read the property
console.log(user2);//{ id: 2020, fname: 'Sameer' }

//insert new property
user2. profile = "Dev";
console.log(user2);//{ id: 2020, fname: 'Sameer', profile: 'Dev' }

//modify the  property
user2. profile = "QA";
user2.fname = "Sneha";
console.log(user2);//{ id: 2020, fname: 'Sneha', profile: 'QA' }

//delete the property
delete user2.profile;
console.log(user2);//{ id: 2020, fname: 'Sneha' }

//In case object only for const declaration object reference is 
// immutable not data
console.log(user1);
user1={address : "UK"};
console.log(user1);

console.log("--------");
console.log(user2);
//user2 = {address:"India"}; //Assignment to constant variable.
console.log(user2);







