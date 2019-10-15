/* here we are applying the es6 standards to the previous question
    in es6: we use fat arrows => and () to substitute the word function */

/*first we write a function that checks for the higher mark of the given two tests
 results */
    var check = (a,b) =>{
        let c = a>b?a:b
        return (c)
    }
/*then we write another function that adds the best done test (80,70)and a coswork marks
and also get its percentage out of 40%*/
    var coswrk = (cos)=>{
        let coswrk = check (80,70) + cos
        let avg = coswrk/2
        let f= avg * (40/100)
        return (f)
    }
/*then we write another function that calculates the exam mark out of 60%
and adds it to the return value of the coswrk function whose value is out
of 40% to get the total mark out of 100%...note, here is whre we write our
coswork value */
    var exam = (exm)=>{
        let g = exm * (60/100)
        let exam = coswrk(70) + g
        console.log("Exam Mark\t"+exam)
    }
/*then we call the exam mark with its value (90) only to get the final mark*/
    exam(90)
