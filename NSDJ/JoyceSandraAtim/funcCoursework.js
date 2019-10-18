 function check(test1,test2) // this function considers the best done test
    {
        let test =(test1>test2)?test1:test2
        return test
    }
    

        function coswork(test1,test2,assignt) 
        {
            let coswrkTotal = check(test1,test2) + assignt;
            let avrg = coswrkTotal/2;  //adding test score to the assignment score 
            let coswrk = avrg*(40/100); // corsework total is out of 40%
            //console.log (e);
            return coswrk
        }

        function exam(test1,test2,assignt,exm){
            let exmTotal = exm*(60/100)  // exam score is out of 60%
            let exmMark = exmTotal + coswork (test1,test2,assignt) //adding corsework and exam score to obtain the final mark.
            console.log (exmMark)

        }
           
        exam(66,75,82,90)

