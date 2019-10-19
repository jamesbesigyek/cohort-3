//First Function is to add three numbers i.e(30,60,100)
function addNums(a,b,c) {  
    let d = a + b + c; //Declare Variables a,b,c and d 
    return d;//return the sum as d
}

//Second Function Should multiply the result from First Function with 2
function mulNums() {
    let e = addNums(30,60,100) * 2;//Second Function multiplied with 2
    return e; //Return the product as e
}

//Third Function is find the remainder of second function divided by 15
function divNums() {
    let f = mulNums() % 15 //Get the remainder of Function 2 divided by 15
    console.log("The remainder of Second Function divided by 15 is :\t" + f) //Output the Result
}
divNums(); //Invoking the Third Function