/*
If-else: true and false conditions we can validate
100 - 199 - Informational
200 - 299 - Successful
300 - 399 - Redirectional
400 - 499 - Client Error
500 - 599 - Server Error

*/
//validate API status code : It should be 201

let statusCode=401;

if(statusCode === 201)
{
    console.log("Successfull reponse for POST call!");
    
}else
{
    console.log("Post call fail!");
    
}

//SEcnario: validate 200 to 299 range of status code

let responseCode = 260;

if(responseCode  >= 200 && responseCode <=299)
{
    console.log("Response code is valid..");
}else {
    console.log("Response is unsuccessful");
    
}