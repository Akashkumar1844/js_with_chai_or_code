//if Statement


if(false){
    //if statement true hoga then staement ke ander jayenge othher wise nhi jayenge
}

// <--lessthan
// >--GreaterThan
// <= lessthanequalto
// >= greaterthanequalto
// == double equalto(this is for check tha equal value "2"==2 true return )
// === tripleEqualto(this is specially  to check equal value with thier data type) 
// = equal to (simple execution ex. userlogged = 4 i.e  userlogged value is 4)


if(2 === "2"){
    // console.log("executed");//nothing executed
}
if(2 == "2"){
    // console.log("executed");// executed ans doesnot check datatype
}


// != notequalto
//!== 



const temprature = 40;

if(temprature === 40){
    // console.log("temprature is best")//agar true raha to if statment execute hoga 
}
else {
    // console.log("temprature  is not good")//if statement execute hoga nhi to else hoga
}

// console.log(" alway executed ");//hamesa execut karega

//part2

const score =200;
if(score>100){
    let power ="fly";
    // console.log(`user power is: ${power}`)//user power is: fly
}

// console.log(`user power after the if statement is: ${power}`)//power is not defined due to scope


// part3

// short hand notation 
 
const balance =1000;

// if(balance>500) console.log("test");//test  one line execution called short hand notation

// if(balance < 500)
   
// // console.log("less than 500");

// else if(balance < 750)
    
// console.log("less than 750");

// else if(balance < 950)
    
// console.log("less than 950");

// else
    
// console.log("greater than 950");



// part4 (and)statement &&

const userLoggedIn = true;
const debitCard  = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to shopping")//Allow to shopping
}

//part5 || or statement
if(userLoggedIn || debitCard || 5==2){
    console.log("Allow to shopping")//Allow to shopping
}
