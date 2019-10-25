 //FUNCTION THAT TAKES THE BEST ONE RESULT OF TWO
    //ADDS TO COURSE WORK AND FINAL MARK IS OUT OF 40%
    //FINAL EXAM IS OUT OF 60%

               //solution

    //function for best 1 of 2 test marks,  between 90% and 80%;
    function test(a,b){
        let c = (a > b) ? a : b
        return c
        }
        let testConsidered = test(90 , 80)
        console.log('Best considered test mark between 90% and 80% is '  + testConsidered + '%')
    
        
        //function for avaerage coursework and best done test mark;
        function courseWork(cos){
        let AverageCourseWrkTestMark = (( cos + testConsidered) * 40 / 100) / 2;
        return AverageCourseWrkTestMark;
        }
        let courseWorkMark = courseWork(80)
        console.log( 'The avarage Coursework and Best done Test mark out of 40% is ' + courseWorkMark + '%');
    
        //function of the exam mark;
        function exam(exm){
        let g = exm * (60 / 100);
        return g;
        }
        let examMark = exam(80);
        console.log('Exam mark out of 60% is ' +  examMark + '%');
    
    
        //final mark of exam and course work;
        function final(){
            let finalMark = examMark + courseWorkMark;
            return finalMark;
        }
          let totalMark = final();
          console.log( 'Total mark got is ' + totalMark + '%');
          
    //////////////////////////////////////////////////////////////////////////////////////////////////////////   
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
     
    
    
    
     //soltion
    //Assignment Two:
    //TRASLATED ASSIGNMERNT ONE:
    
    //function for best 1 of 2 test marks,  between 90% and 80%;
    let test = (test1, test2) =>{
    let selectedOne = (test1 > test2) ? test1 :test2
    return selectedOne
    }
    let bestDoneTest = test(90,80)
    console.log( 'Best of  two tests marks 90% and 80%  is ' + bestDoneTest + '%');
    
    //function for avarage coursework and best done test mark out of 40%;
    let courseWork = (cos) => {
    let averageCourseWrkTestMark = ( cos + bestDoneTest) / 2
    let finalCourseWrkTestMark = (averageCourseWrkTestMark * (40/100))
    return finalCourseWrkTestMark
    }
    let finalMarkOutOfForty = courseWork(80)   
    console.log( 'Final average coursework and best done test mark out of 40% is ' + finalMarkOutOfForty+ '%');
    
    
    //function of the exam mark out of 60%;
    let exam = (exm) =>{
    let examMrkOutOf60Percent = exm *(60 / 100)
    return examMrkOutOf60Percent
    }
        let examMrkOutOf60Percent = exam(68);
        console.log('Exam mark out of 60% is ' +  examMrkOutOf60Percent + '%');
    
    //final mark of exam and course work out of 100%;
    let final =  (exm) =>{
        let finalMark = examMrkOutOf60Percent + finalMarkOutOfForty;
        return finalMark;
    }
      let totalMark = final();
      console.log( 'Total mark out of 100% is ' + totalMark + '%');    
    