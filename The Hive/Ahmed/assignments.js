//First Function; adding 3 numbers
/*function addFunction(a,b,c){
    
    var d = a + b + c;
    return d;
}
addFunction()
//Second Function; getting results from 1st function and multiplying by 2
function multFunction(){
    let e = addFunction(30,60,100) * 2;
    console.log('result from the 2nd function\t'+ e)
    return e; 
}
multFunction()
//Third Function; getting results from 2nd function and getting remainder by dividing by 15
function remFunction(){
    let answer = multFunction() % 15
    console.log("result from the third function\t" + answer)
}

remFunction()*/

//Weekend Assignment
//Function definition for the 2 test results.
//System instructed to check whether value 'a' is greater than value 'b', if so it picks 'a', if otherwise it picks 'b'

function check(test1,test2){
    let tst = (test1>test2)?test1:test2;
    return tst;
}
//second function for ascertaining the results for the coursework.
//involves calling first funnction into operation within the second function

function coswrk(cos){
    let avg = check(70,80) + cos
let cosmark = avg * (40 / 100)
return cosmark;
}
// third function for ascertaining results from the exams and the final grade
//invokes second function within its operation and provides value for (cos) for system to compute
//value for (exm) is provided upon invocation of the function after function definition

function exam(exm){
    let ex = exm * (60 / 100)
    let exmMark = ex + coswrk(80)
    console.log('this is the final grade\t' + exmMark);
}

exam(40);

//Same assignment in ES6 Format

let check = (test1,test2) =>{
    let tst = (test1>test2)?test1:test2;
    return tst;
}
//second function for ascertaining the results for the coursework.
//involves calling first funnction into operation within the second function

let coswrk = (cos)=>{
    let avg = check(70,80) + cos
let cosmark = avg * (40 / 100)
return cosmark;
}
// third function for ascertaining results from the exams and the final grade
//invokes second function within its operation and provides value for (cos) for system to compute
//value for (exm) is provided upon invocation of the function after function definition

let exam = (exm) =>{
    let ex = exm * (60 / 100)
    let exmMark = ex + coswrk(80)
    console.log('this is the final grade\t' + exmMark);
}

exam(40);