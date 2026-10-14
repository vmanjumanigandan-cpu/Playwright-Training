// Nested if helps to validate multiple conditions
//Scenario:

/**
 Find student grade based on their marks
 if marks are greater than or equal to 95, 
 display A++ grade
 if marks are greater than or equal to 90
 but less than 95 then display A grade
 Otherwise display B grade

*/
let marks = 97;

if(marks>=90)
{
    if(marks>=95)
    {
        console.log("A++");
    }
    else{
        console.log("A");
    }
}
else{
    console.log("B");
}

// same concept using relational operators

let marks1= 79

if (marks1>=95){
    console.log("A++");
}else if (marks1>=90 && marks1 <95){
    console.log("A")
}else{
    console.log("B");
}