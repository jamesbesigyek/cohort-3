//checking for the best done test
var checktests = (test1,test2)=>{
    var comp = (test1>test2?test1:test2)
    console.log('the highest mark is\n'+comp)
    return comp
}
//computing the course work mark 
var coswrk = (cos)=>{
var coursework = checktests(90,80)+cos
var courseworkmarkavrge = coursework/2
var courseworkmark = courseworkmarkavrge*(40/100)
console.log("courseworkmark is\n"+courseworkmark)
return courseworkmark
}
//computing the final mark from course work and the exam marks
var examark = (exm) =>{
    let exam = exm * (60 / 100)
    console.log("exam is:\n" + exam)
    let fmrk = exam + coswrk(90)
    console.log("final mark is:\t" + fmrk)
}
checktests(90, 80)
examark(80)
