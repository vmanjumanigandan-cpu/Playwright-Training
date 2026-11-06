//Prime number logic without for loop
let pnum= 899;
//for (let i = 1; i< pnum ; i++)
//{
    if ((pnum % 2 == 0) || (pnum % 3 ==0))
    {
        console.log(`${pnum} is not the prime number`);
    }
    else
        {
        console.log(`${pnum} is the prime number`);
    }
//}