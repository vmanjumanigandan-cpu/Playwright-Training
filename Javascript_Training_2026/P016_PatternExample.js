// Nested for Loop

/*
For Pattern examples:
- First collect row wise result and then print

*/
/*
pattern 1:
----------

 * * * *
 * * * *
 * * * *
 * * * *

 */
 
for (let r=1; r<=4;r++)
{
    let row=" ";

    for (let c=1; c<=4; c++)
    {
        row=row+" *";
    }
    console.log(row);
}
console.log("-----------------------------");
/*
pattern2:
--------

  *
  * *
  * * *
  * * * *

*/

for (let r=1; r<=4; r++)
{
    let row =" ";
    for (let c=1; c<=r;c++)
    {
        row= row+" *";

    }
    console.log(row);   
}

console.log("-----------------------------");
/*
pattern3
--------

  1
  1 2
  1 2 3
  1 2 3 4

*/
for (let r=1; r<=4; r++)
{
    let row =" ";
    for (let c=1; c<=r;c++)
    {
        row= row+" "+c;

    }
    console.log(row);   
}
console.log("-----------------------------");

/*
pattern 4
---------
  1
  2 2
  3 3 3
  4 4 4 4
*/

for (let r=1; r<=4; r++)
{
    let row =" ";
    for (let c=1; c<=r;c++)
    {
        row= row+" "+r;

    }
    console.log(row);   
}
console.log("-----------------------------");
/* pattern 5
------------
  1
  2 3
  4 5 6
  7 8 9 10
  */

let k=1;
for (let r=1; r<=4; r++)
{
    let row =" ";
    for(let c=1; c<=r;c++)
    {
        row = row+" "+k;
        k++;
    }
    console.log(row);
}
console.log("-----------------------------");

//HW - Try two patterns as HW
