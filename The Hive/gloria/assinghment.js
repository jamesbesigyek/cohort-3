
/*function mary(){
    let num1 = 30
    let num =60
    let num2 = 100
    let num3 = num1+num+num2
    console.log( "this is for the addition",num3)
    return num3;
}
mary();

// the below shows how you call fuction in another fuction and then multiplying a result of another function it.
function mary2(){
    let losh = mary()*2
    console.log ("this is for the multiplication",losh)
    return losh;
}
mary2();

// the below also show afunction that is dividing aresult from another fuction
function mary3(){
    let going = mary2() % 15
    console.log ("this is for the remainig",going);
}
mary3();
*/


// another way of laying out a code in afunction in paremetors 
// the () are the paremetors
function osman(a,b,c){
   let d=a+b+c 
   //alternatively add(30,20,10)
    console.log(d);
    return d
}
osman(100,200,300);
    
//'t'is atab used to creat space within 
//this is also another way of writing a function
/*
function multNums(w,x,y){
let z = w+x+y
return z;
}
 function addiNums(){
 let m= (20,20,30)-10
 console.log('the answer is :\t'+m)
 return m
 }
 addiNums();
*/

//introduction to arow functions
let test = ()=>{
let a = 20
let b = 30
let c = a+b
console.log (c);
}
test ();

//cs6 formarting with parametors

let exam=(l,x)=>{
let c = l*x
console.log(c)
}
exam(3,5);