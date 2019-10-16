
//this code below is going to be containing some notes for reference //...............
//the below is the formular of finding out a datatype 
var x = 2
console.log (typeof x)

// when conditionin you do the following

var x = 5;
if (x===5){
    console.log ("exact")
}

/*
//awrong way
var x = 5;
if (x==="5"){
    console.log ("exact")
}*/

//a wrong way so the code below tells the computer bring out an answer if x < 5 it wont work because 5=5 is the same character
/*var x = 5;
if (x < 5){
    console.log ("exact")
}*/
//

var x = 5;
if (x<5){
    console.log ("output")
}
//alternative way of using = sings is as follows
var x = 5;
if (x<=5){
    console.log ("exact")
}
//using if else works as below
var x = 5;
if (x<=5){
    console.log ("exact")
}
else {
    console.log(true)
}
var y = 10
if (y < 5){
    console.log ("exact")
}
else {
    console.log(true)
}
// please always follow the steps of javascript if and else works when you are conditioning your code take the example below 
// below says that 10 is greater than 11 ,if it is true i want it to show exact is  
var y = 10
if (y > 11){
    console.log ("exact")
}
else {
    console.log(false)
}

//else,if and else if works as below

var marks = 50
if ( marks > 50){
    console.log ("passed");
}
else if (marks = 50) {
    console.log( 'you are on probation');
}
else{
console.log ( 'you have failled');
}
// if you use = means that you are asigning
// if you use = = means that compaire the values
//if use = = = means that you are compairing the value and the data type

//introduction to loops 11/10/2019

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);

// another way just copied and pasted so that the power of loops can be understood
console.log(1);

// introduction of while loop 
//if you want something to be done once use will loops example using while loops
var x = 1;
while(x<=100){
console.log(x);
x++
}

// for loops

for (var m =10;m<=10;m++);{
    console.log(m);
}


