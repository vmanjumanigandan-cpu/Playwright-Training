/*lass StudentData
{
    id;
    fname;

}

get data()
{
    console.log("College name : ", StudentData.clgname);

    
}
*/

console.log("----------------");

class Employee
{
    eid;
    ename;
    address;
    profile;
    salary;

    constructor(id, name, address, profile, salary)
    {
        this.eid = id;
        this.ename = name;
        this.address = address;
        this.profile = profile;
        this.salary = salary;

    }
//SyntaxError: A class may only have one constructor
/*
    constructor(id,name)
    {
        this.eid=id;
        this.ename=name;

    }*/


    getInfo()
    {
        console.log("Emp ID: ", this.eid+"\nEmp Name : ",this.ename, "\nEmp profile : ",this.profile);
        console.log("Emp Address: ", this.address,"\nEmp salary : ",this.salary);    
    }


}
//object
let e1 = new Employee(101, "Poonam", "India", "Dev",800000);
e1.getInfo();

let e2 = new Employee(102, "Kiran");
e2.getInfo();