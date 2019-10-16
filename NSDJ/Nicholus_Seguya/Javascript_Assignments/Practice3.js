//This function compares two salaries and returns the highly taxed Salary
let compute = (salEmp1,salEmp2) =>{ //The function takes in two paramaters Salary1 and Salary2

    if ((salEmp1>=130000) && (salEmp2>=130000)){   //First check if both Salaries are greater or equal to 130000.
        let payee1 = salEmp1 * (30/100); //Declare a variable payee1 and assign it a value
        let payee2 = salEmp2 * (30/100);  //Declare a variable payee2 and assign it a value  
        let comp = (payee1>payee2?salEmp1:salEmp2); //Compare the two payee values and return the highest
        console.log("The highest Taxable Salary is :\t" + comp); //Output the highly Taxable Salary
    }
    else{ // If any of the salaries is less than 130000 dont compare the payee values.
        console.log("We cannot compare the two because Either One or Both Employees don't pay Pay as you Earn ");
    }
}

compute(200000,300000); //Invoking the function first Trial
console.log("================= End of First Trial ================")
compute(300000,200000);
console.log("================= End of Second Trial ================")
compute(100000,150000);