/*
 * RE-DOING ASSIGNMENT TWO  USING ES6 STYLE OF DEFINING FUNCTIONS
 * 
    first paramaterlized function that takes 2 marks (mark 1 and mark 2) - 2 tests
    Checks for the best out of the two marks 
    returns the better mark
    
    second parametized function that requires one parameter (coursework marks)
    adds the returned better mark to the required coursework mark 
    multiplies that result by 0.4 - 40/100 and returns the final product
    
    
    third parametized function that takes one parameter (exam mark)
    multiply the passed exam mark by 0.6 - 60/100
    add the product result to the result returned from the second function
    and then display the final answer
    
*/       
        
        //NEW FUNCTION VERSION USING ES6, where all marks are passed to the final exam function as arguments
        
        //function to check which test mark is higher
    var check = (mark1 , mark2) => { 
    
    let higher_mark = mark1 > mark2 ? mark1 : mark2; //checking which mark is higher and assigning it to the variable higher_mark
    
    console.log("The better done test is \t"+higher_mark);
    return higher_mark;
    
    }
    
    //calculating final coursework mark
    var coursework = (test1,test2,mark) => {
            let higher_test_mark = check(test1 , test2);
            let result = ( higher_test_mark + mark)/2;
            
            console.log("\n The average of test mark "+ higher_test_mark +" and coursework mark "+ mark +" is \t"+result);
           
 console.log("\n The final coursework mark is \t"+result * (40/100));
            
            return result * (40/100) //returning the final coursework mark
            
        }
        
    //computing the final course mark
    var final_mark = (test1,test2,coursework_mark,exam_mark) => {
            
        let temp = exam_mark * (60/100);
        
        console.log("\nThe final mark is " + (temp + coursework(test1,test2,coursework_mark)))
        
        }
        
        final_mark(85,100,40,80);