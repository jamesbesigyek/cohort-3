var check_name = () => {
  //Create variables for all elements
  var studentName = document.getElementById("txt-name");
  var test1 = document.getElementById("txt-test1");
  var test2 = document.getElementById("txt-test2");
  var courseWrk = document.getElementById("txt-course");
  var examMark = document.getElementById("txt-exam");

  if (studentName.value == "") {
    alert("Student's name should not be empty");
    studentName.style.border = "2px solid red";
  }
  if (test1.value == "") {
    alert("Please provide your Test one Mark");
    test1.style.border = "2px solid red";
  }
  if (test2.value == "") {
    alert("Please provide your Test two Mark");
    test2.style.border = "2px solid red";
  }
    if (courseWrk.value == "") {
    alert("Please provide your Coursework Mark");
    courseWrk.style.border = "2px solid red";
  }
    if (examMark.value == "") {
    alert("Please provide your exam Mark");
    examMark.style.border = "2px solid red";
  }
//   if (
//     studentName.value == "" && test1.value == "" && test2.value == "" && courseWrk.value == "" && examMark.value == "") {
//     alert("Fields should not be empty");
    
//     test1.style.border = "2px solid red";
//     test2.style.border = "2px solid red";
//     courseWrk.style.border = "2px solid red";
//     examMark.style.border = "2px solid red";
//     //return false
//   }
};
