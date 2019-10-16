//exercise one
//assignment. create a file, define 3 functions
//1st function should add 3 numbers (30,60,100)
//2nd function should get the result from 1st function and multiply by 2
//3rd function get results from function 2 and get remainder after divide by 15.
// this is for the loan balance.

function rpyt() { // this function is for getting the total loan repayment
    let share = 30
    let interest = 60
    let principal = 100
    let balance = share + interest + principal;
    console.log('your total balance is \t' + balance);
    return balance;
}
//this is for the repayment
rpyt();
function balBf() {
    let fees = rpyt() * 2;
    console.log('total repayment \t' + fees);
    return fees;

}
// this is for balance brought forward
// use a + instead of a coma because a coma takes alot of space and \t for a space and \n for a new line.
balBf();
function total() {
    let pay = balBf() % 15;
    console.log('the net pay is \n' + pay)
}
total(); 







/*function check(mark1, mark2) {
    let higherMark = mark1 > mark2 ? mark1 : mark2; // finding the higher mark
    return higherMark;
}
function courseWork(cw_mark) {
    let result = check(85, 60) + cw_mark; // finding the coursework mark
    return result * (40 / 100);
}
function finalMark(exam) //determining the final mark.
{
    let examMark = exam * (60 / 100);
    let passExam = examMark + courseWork(55)
    console.log(passExam);
}
finalMark(75);*/
// newer code using the fat arrow...
let check = (mark1,mark2) =>{
    let higherMark = mark1 > mark2 ? mark1 : mark2; // finding the higher mark
    console.log(higherMark)
    return higherMark; 
}
let courseWork = (mark1,mark2,cw_mark) =>{
    let result = check(mark1, mark2) + cw_mark; // finding the coursework mark
    //calculating average
    let avg =(result/2)
    let mark_outOf_40 = avg *(40/100) //calculating the average of the best done and the cw_mark.
    console.log(mark_outOf_40) //the console is outputing the coursework mark /40%
    return mark_outOf_40 // return value for re-use
    
}
//courseWork(40,70,60)
//final mark, they need to be four paramaters since, it depends on other functions.
let  finalMark =(mark1,mark2,cw_mark,exam) =>{
    let examMark = exam * (60 / 100); // calculate the exam mark out of 60%
    let passExam = examMark + courseWork(mark1,mark2,cw_mark)
    console.log(examMark); // ouput examMark out of 60%
    console.log(passExam);// output the total passExam out of 100%
}
finalMark(40,70,60,75)
