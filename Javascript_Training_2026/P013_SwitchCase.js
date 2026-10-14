/**
 
switch (key) {
    case value:
        
        break;

    default:
        break;
}
 
 */
// Traffic signal
console.log("Program started");

let color = "red";

switch (color) {
    case "green":
        console.log("GO");
        break;
    case "red":
        console.log("STOP");
        break
    case "Yellow":
        console.log("READY");
        break;

    default:
        console.log("Color Error!");
        break;
}

//practice 

let key = 6;

switch (key){
    case 1:
        console.log("Option 1 selected");
        break;
    case 2:
        console.log("Option 2 selected");
        break;
    case 3:
        console.log("Option 3 selected");
        break;
    case 4:
        console.log("Option 4 selected");
        break;        
    default:
        console.log("Default option");        
}

//
let browserName = "MSEdge".toUpperCase();
switch(browserName)
{
    case "CHROME":
        console.log("Test cases is executing on Chrome");
        break;
    case "MSEDGE":
        console.log("Test cases is executing on MsEdge");
        break;
    case "WEBKIT":
        console.log("Test cases is executing on Webkit");
        break;        
    case "SAFARI":
        console.log("Test cases is executing on safari");
        break;
    default:
        console.log("Wrong browser");
            
}