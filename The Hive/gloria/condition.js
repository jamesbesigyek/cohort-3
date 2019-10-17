//introducrion to if and else if ,they are always used to condition the code
//more especially when yo have a situation you want to analyse take example below
let num1 =20 ,num2 = 40
if (num1>num2){
    console.log('you have passed')
}
else
{console.log ('you are about to reach heaven')
}
//introduction to if and else if continues
let pay = ( sal)=>
{
    if (sal>130,000){
    let payee = sal * (30/100)
    console.log(payee);
    return payee//returns are used when you want to expose the values of a fuction you have called in another function
}

else {
    console.log('please enjoy your salary wisely')
}
}
pay(160000);
// if and else continues
let employees = (sal1,sal2)=>{
  let payee1=sal1*(30/100)
  let payee2=sal2*(30/100)
  if (payee1>payee2) 
  {
    console.log('payee1 pays more') 
  }
else 
{
    console.log('payee2 is paying more')
} 

}
employees(150000 ,1000000)
// calculations to know who has more money with a % of 30
let boss=(ug,usa)=>{
let momo= ug*(30/100)
let momo1=usa*(30/100)
if (ug,usa>=100){
    console.log('ryt track')
}
else {
    console.log('please read more notes')
}
}
boss(100000,100000);
// comparing salaries when using if is coded like this incase you want to know who gets more salary with the % of 30
let compare =(sal3,sal4)=>{
if (sal3>=130000 && sal4>=130000){
    let payee3=sal3*(30/100)
    let payee4=sal4*(30/100)
    let com =(payee3>payee4?sal3:sal4);
        console.log('the high taxable is :\t' + com);
}
    else {
        console.log('less tax payable')
    }
}
compare();

//introduction to else if , else and if while coding in js
//take example below
//aLERT DOES NOT SHOW IN THE TERMINAL BECAUSE IT IS MEANT FOR THE BROWSER

var mySal =200
var yourSal =1000
if (mySal>yourSal){
    console.log('mysal is greater than your sal')

}
else if (mySal<yourSal){
    console.log("my salary is less than your salary")
}


//using stwich condition instead of if,else and else if
//take example of the below for testing the variables 
// the method of switch is used to check 
//note declaration of a variable is done first before stwiching take alook
var sal = 20000
switch (sal){
    case 2000:
        console.log('that is not 20000')
        break
        case 200000:
            console.log('that is not 20000')
            break
            default:
                console.log('20000 is the default value')
}

// using stwich for students marks take the example below

var courseMarks = 50
switch (courseMarks)
{
    case 0:
console.log('you failed')
    break
    case 50:
    console.log('your grade\:+D')
}

// for this condition it will first run and see if the mark is correct then 
var marks =50
switch (marks>=49)
{
    case true:
    console.log('false')
    break
}
//for another marks
switch (marks = 50 && marks <= 65){
case true:
    console.log('true')
break
}

//using loops when you want your code to run and run and run untill you stop take example below

var nom
for (nom=0 ; nom<=5 ;nom++)//name of the var nom++ tells the computer to first use the value of the var and then increse it late by a value of one.
{
console.log(nom)
}
//modify the above code to get an odd number(numbers that when you divide by 2 you get aremainder of 1)
var nom =0
for (var nom =0 ; nom <=5 ; nom++){
    if (nom%2 ==1)  //this is how it is divided to get odd numbers when using for-loop
    console.log(nom);
}

let nom1=0
for(
    nom1=0 ; nom1 <=10 ; nom1++
){
    if (nom1%2==0)//division for getting even numbers(numbers that when you divide by 2 you get remainders of nothing or 0)
    console.log(nom1)
}

//for-loops continues when calculating even numbers
//let is always used for creating atemporary space
//var is always used for globle variable
for (let a =0 ; a<=5 ; a++){
    var c=(a %2 == 0)? a:
    console.log(c)
}


