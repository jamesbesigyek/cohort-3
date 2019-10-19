//A Function that compares two employees' salary calculates the PAYE and determines who pays more.
let paye = (empSalary1, empSalary2) => 
{

    if(empSalary1>=130000 && empSalary2>=130000)
    {
        var paye1 = empSalary1 * (30/100);
        var paye2 = empSalary2 * (30/100);

    }
   
    
    if(paye1 > paye2)
    {
        console.log('Employee1 pays more PAYE tax ' +paye1);
    }
    else
    {
        console.log('Employee2 pays more PAYE tax ' +paye2);   
    }
    return paye;
}

//Function Calling
paye(200000, 300000);

