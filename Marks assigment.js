/*Question
calculate the final exam mark :where 
test marks (80,70), coswork marks-70, exam mark- 90*/

/*first we write a function that checks for the higher mark of the given two tests results */
function check (a,b){ 
    let c = a>b?a:b
      return (c)
    }
/*then we then write another function that adds the best done test and a coswork marks
and also get its percentage out of 40%*/
    function coswrk(cos){
        let coswrk= check (80,70)+ cos
        let avg = coswrk/2
        let f = avg * (40/100)
        return (f)
    }
/*then we write another function that calculates the exam mark out of 60% 
and adds it to the return value of the coswrk function whose value is out 
of 40% to get the total mark out of 100% */
    function exam(exm){
        let g = exm*(60/100)
        let exam = coswrk(70) + g
        console.log(exam)
    }
 /*then we call the exam mark with its value (90) only to get the final mark*/
    exam(90)
    