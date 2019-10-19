//returning the highest test result
function checktests(test1,test2){
    var best =(test1>test2)?test1:test2
    return best
}
//calculating total coursework result
function coswrk(cos){
    var coursework = checktests(90,80) + cos
    var courseworkavrge = coursework/2
    var courseworkmark = courseworkavrge *(40/100)
    console.log("course work mark is:\n"+courseworkmark)
    return courseworkmark

}
//calculating final marks
function exam(exm){
let examark = exm*(60/100)
console.log("examark is:\n"+examark)
let fmrk = examark + coswrk(90)
console.log("final mark is:\t"+fmrk)
}
checktests(90,80)
exam(80)


/*//cs6 standard
let marks = (x,y)=> {
    let z = x+y
    console.log(c)
    return z

}
marks(70,80)
//add two numbers
let add =()=>{
    let num1 = 20
    let num2 = 30
    let num3 = num2 + num1
    console.log(num3)
}
add()
*/
