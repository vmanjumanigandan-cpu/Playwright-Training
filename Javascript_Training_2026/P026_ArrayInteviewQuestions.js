/* Interview questions

*/
//Sum of array elements
let arr = [10,20,30,40,50];
let sum =0;
for (let i of arr)
{
    sum = sum+i;
}
console.log("Sum of Array elements : ",sum);
console.log(" --------------------- ");

//declare an array and count even and odd numbers from array
let a1 = [10, 15,20,25,30,35];
let evenCount = 0;
let oddCount = 0;
for (let i of a1)
{
    if (i % 2== 0)
        {
        evenCount++;
    }
    else{
        oddCount++;
    }
}
console.log("Total even numbers: ",evenCount);
console.log("Total old numbers: ",oddCount);
console.log(" --------------------- ");

//declare an array find minimum number
let a2 = [40,10,30,20,50,5];
console.log("Array list: ", a2);
let min = a2[0];
let max = a2[0];
for (let i=0;i<a2.length;i++)
{
    if (a2[i] < min)
    {
        min = a2[i];
    }
    else if (a2[i] > min)
    {
        max = a2[i];
    }
}
console.log("Minimum number : " ,min);
console.log("Maximum number : ", max);
console.log(" --------------------- ");

//Remove duplicate elements from the array

let a3 = [10, 10, 20, 20, 30, 40, 50];
let unique = [];

for (let i of a3)
{
    if(!unique.includes(i));
    {
        //add element to unique array
        unique.push(i);
    }

}
console.log("----------------");

let ar = [10,20,10];
let un = [];
for (let i of arr)
{
    if (!un.includes(i))
    {
        un.push(i);
    }
}
console.log(ar);
console.log(un);

