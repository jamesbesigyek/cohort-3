/**
 * Assignment using normal-function to calculate student marks
 * function that evaluates the best done between two tests
 * */
function testEvaluetor(test1, test2) {
  let bestDoneTest = test1 > test2 ? test1 : test2;
  return bestDoneTest;
}

/**
 * function that computes the sum of best done test and course work our of 40%
 * */
function avSum(courseWork) {
  let testCourse = testEvaluetor(59, 38) + courseWork;
  let avg = testCourse / 2;
  let avTotalCW = avg * (40 / 100);
  return avTotalCW;
}

/**
 * function that computes the sum of exam mark and average total course work our of 100%
 * */
function finalTotal(examMark) {
  let exam = examMark * (60 / 100);
  let totalMark = exam + avSum(57);
  return totalMark;
}
let total = finalTotal(23);
console.log("\n Your final mark is :\t" + total + "%");