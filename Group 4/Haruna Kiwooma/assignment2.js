

/**
 * Assignment using arrow-function to calculate student marks
 * function that evaluates the best done between two tests
 * */
let testEvaluetor = (test1, test2) => {
  let bestDoneTest = test1 > test2 ? test1 : test2;
  return bestDoneTest;
};

/**
 * function that computes the sum of best done test and course work our of 40%
 * */
let avSum = courseWork => {
  let testCourse = testEvaluetor(59, 38) + courseWork;
  let avg = testCourse / 2;
  let avTotalCW = avg * (40 / 100);
  return avTotalCW;
};

/**
 * function that computes the sum of exam mark and average total course work our of 100%
 * */
let finalTotal = examMark => {
  let exam = examMark * (60 / 100);
  let totalMark = exam + avSum(57);
  return totalMark;
};
let totalMark = finalTotal(90);
console.log("\n Your final mark is :\t" + totalMark + "%");

switch (true) {
  case (totalMark > 79):
    console.log("Your grade is A, Exellent");
    break;
  case (totalMark > 69):
    console.log("Your grade is B, V.Good");
    break;
  case (totalMark > 59):
    console.log("Your grade is C, Good");
    break;
  case (totalMark > 49):
    console.log("Your grade is D, Fairly passed");
    break;

  default:
    console.log("Failed, read harder");
    break;
}
