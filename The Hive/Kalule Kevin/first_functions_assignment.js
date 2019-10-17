  /*        
   * FIRST ASSIGNMENT FOR FUNCTIONS
   * 
   * create file
            define 3 functions
            1st function should add 3 numbers (30, 60, 100)
            2nd funcion should get results from function 1 and multiply by 2
            3rd function sould get result from 2nd function and get remainder dividing by 15*/
            
            //FUNCTION TO ADD 3 NUMBERS
            function add(param1 , param2 , param3){
                let num1 = param1 , num2 = param2 , num3 = param3
                
                let sum = num1 + num2 + num3;

console.log("The result from the add function is \t"+ sum) ;
                return sum;
                }
            
            //FUNCTION TO MULTIPLY SUM BY 2
            function multiply(){
                
                let addition_answer = add (30,60,100);
                let multiply_result = addition_answer * 2;
               
 console.log("\n\nThe result from the multiply function is \t"+ multiply_result) ;
                return multiply_result;
                }
            
            //FUNCTION TO FIND THE REMAINDER OF PRODUCT AND 15
            function remainder(){
                
                let multiply_result = multiply();
                
                let final_result = multiply_result % 15

console.log("\n\nThe final result is \t"+ final_result) ;
                
                }
                
                remainder();