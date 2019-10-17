   /*
    * ASSIGNMENT 3 ON CONDITIONS 
         * 
         * create a function that compares the PAYE of two employees using ES6 style of defining functions
         * 
         * */
         
        //function that calculates PAYE expected from the salary passed to it 
         var calculate_PAYE = (salary) => {
             
             let payable = 0; //initializing payable local variable that shall hold how much salary employee should pay
             
             if(salary >= 130000){
                 
                 payable = (salary * 0.3); //calculating PAYE since its more than 130000
                 
                 }
                 
                 return payable;
             
             }
             
          //function that compares employee PAYE  
             var check_employee_PAYE = (employee1_salary , employee2_salary ) => {
                 
                    let employee1_payable = calculate_PAYE(employee1_salary);
                    let employee2_payable = calculate_PAYE(employee2_salary);
                    
                    if(employee1_payable > employee2_payable){
                        
                            console.log("Employee 1 shall pay more PAYE worth \t "+employee1_payable);
                        
                        }else {
                            
                             console.log("Employee 2 shall pay more PAYE worth \t "+employee2_payable);
                             
                            }
                 
                 }
                 
                 check_employee_PAYE(500000,200000);