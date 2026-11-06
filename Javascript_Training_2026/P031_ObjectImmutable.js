/*
Object we can create as immutable with freeze()
freeze() 
*/
const user1 = {
    id: 1010,
    fname : "Kiran",
    location : "UK"
}
//object will become immutable

Object.freeze(user1);

//read the property
console.log(user1.fname+" : "+user1.location);

//insert new property
//user1.phno=9897899;
// TypError : Cannot add property phno, object is not extensible

//modify any property
user1.location = "India";




