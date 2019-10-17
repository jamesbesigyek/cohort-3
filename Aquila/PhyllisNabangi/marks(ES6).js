/* A program that calculates the final mark of a student by considering course work mark
   Best done test mark and Exam mark using ES6
  */

 //Function takes 2 test marks and checks for the best
let checkTest = (test1, test2) =>
{
let bestMark = (test1>test2)?test1:test2;
return bestMark;
}

//Function that gets the average of the best test mark and coursework mark
let courseWork = (test1, test2, coswrk) =>
{
let averageMark = (checkTest(test1, test2) + coswrk) /2;
let finalcoswrk = averageMark * (40/100);
console.log('The coursework mark is : ' +finalcoswrk + ' out of 40');

return finalcoswrk;
}

//
let exam = (test1, test2, coswrk, ex) =>
{
let examMark = ex * (60/100);
let finalMark = courseWork(test1, test2, coswrk) + examMark;
console.log('The Exam mark is : ' +examMark + ' out of 60');
console.log('The Final mark is : ' +finalMark);
}

//Function calling
exam(83, 80, 92, 85);