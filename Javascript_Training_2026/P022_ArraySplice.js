/*
splice(start: number, deleteCount?: number): string[]
The zero-based location in the array from which to start removing elements.


Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

To delete or insert any element in array we use splice()

Syntax
======
array.splice(start number, delete count)

Array<string>.splice(start: number, deleteCount?: number | undefined): string[] (+1 overload)

it always works with 0 based index

*/


let fruits = [ 'Mango', 'Orange', 'Banana', 'Grapes', 'Kiwi', ' Apple'];
//Index            0        1       2           3        4       5
// Delete banana - index 2
let removeEle = fruits.splice(2,1)
//return deleted fruit only
console.log(removeEle);
console.log(fruits); //['Mango', 'Orange', 'Grapes', 'Kiwi', ' Apple']
//deleting kiwi and Apple
let removeEle2 = fruits.splice(3,2);
console.log(removeEle2);//[ 'Kiwi', ' Apple' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Grapes' ]
//delete Orange and Insert two new fruits [ 'Kiwi', ' Apple' ]
fruits.splice(1,1,'Kiwi', 'Apple');// [ 'Mango', 'Orange', 'Grapes' ]
console.log(fruits); //[ 'Mango', 'Kiwi', 'Apple', 'Grapes' ]

// insert two fruits at start position 2
fruits.splice(2, 0, 'Orange', 'Banana');
console.log(fruits); //[ 'Mango', 'Kiwi', 'Orange', 'Banana', 'Apple', 'Grapes' ]








