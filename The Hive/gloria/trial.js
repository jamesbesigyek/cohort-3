//my first examples of javascript
//first variable

//LET,VAR,CONST are always used for assigning and its like an instruction that tells a computer what to do.

let num1 = 10
//second variable
let num_2 = 20
//third variable will be the sum of the two vars (this is going be adding the variables)
let num3 =num1+num_2
console.log (num3)
//subtruction
//first variable
let a = 30
//second variable
let b = 50
//showing the results below for subtruction
let c = b-a
//console.log shows the answers you expect.the answers are always showed in the terminal
console.log (`this is the answer\n`+ c)
//the below is another example
let age
age = 22
console.log(age)

//examples for subtruction contunues 
let w = 30
let y = 50
let d = y-w
console.log (d)

// using the multiplication,addition,division and subtruction signs /operators on javascript.
var s = 30
var t = 40
var g = s+t
console.log (g)
 // the code below is for division in js
var i = 50, j = 5;
var f = i/j
console.log(f)

// multiplication sighn is the * and the below shows how to mulitiply
var h = 50
var e = 2
var x =h*e
console.log (x)

// subtruction code in js file
var r=20
var k =10
var me = r-k
console.log (me)

//var z = g++
//console.log(z)
var l = ++g
console.log(l)

var num4 = --g
console.log (num4)

var num5 = g+=2
console.log (num5)

let sum  = 20
let sub = 50
let add =sum%sub
console.log(add)
let add2 = sub% sum
console.log(add2)

//other operating signs that is logical
var x = 5,x2 ='5';
var x3 = x ==x2;

//===
var x4 = x === x2
console.log(x4)

// functions are always used to group code take the example below to learn more
//and it is example of vanilar js
function addNums() {
    let num1 = 200;
    let num2 = 100;
    let num3 = num1 + num2
    console.log("the sum is ",num3);
    return num3;
}
 
addNums ();
//the code below is when you are calling afunction in another function
function subNums() // function difinition in this case is the subNums
{
   let diff = addNums()-200
   console.log( "this will show a difference btn addnums and subnums 300-200=",diff);
  
}
subNums();
//when calling a function Nums ();