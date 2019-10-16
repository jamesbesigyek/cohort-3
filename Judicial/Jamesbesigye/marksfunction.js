//function to receive two marks and choose a higher marl

function marks(mark1,mark2){
  var mark1, mark2, highermark
highermark = (mark1 >= mark2)?mark1:mark2


return highermark
}
//console.log ("The higher mark is \t" + marks(68,75))//prints higher mark

//function to recieve course work marks, add the higher score from marks function and multiply by 40%
function coursework(mark3){
  var mark3, finalassesment 
  var assesment = marks(68,75)
  //console.log(mark3)
  finalassesment = (mark3 + assesment)*0.4
  //console.log(assesment)
  console.log(finalassesment)
  return finalassesment

}
coursework(25)
