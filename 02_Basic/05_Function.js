function SayMyName() {
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E");
    console.log("K");
}


// SayMyName();//here SayMyName is reference and ()bracket is exsicution

// 2nd topic

// function addTwoNumber(number1,number2){


//    console.log(number1 +number2);
   
// }

// addTwoNumber(3,4);
function addTwoNumber(number1,number2){

// you can write 
//    let result =number1 +number2;
//    return result;

// otherwise
return number1 + number2;

}

const result= addTwoNumber(3,4);
// console.log("Result",result);

// topic3



function loginUserMessage(username){
    if(username === undefined)//(username === undefined )same as (!username)
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("RadheKrishna"))//RadheKrishna

// console.log(loginUserMessage())//please enter a username  undefined

//# how to give default value for function

function giveDefault(username= "Ramlalaah"){//here username having  default value
    return `${username}  hamre ghar aayenge`
}

// console.log(giveDefault());


//topic 3


//Restoperator=>use jab hum online shoping kerte hai product ko read kerne me help (...)three dot 

function RestopertorUse(...num){
    return num;
}

// console.log("Heres your cart",RestopertorUse(100,200,500,700));


//topic 4

//how to add object in function

const user={
    username:"akash",
    rollno:"21",
    school:"DAV"
}

function handleObject(anyobj){
    console.log(`username of user ${anyobj.username} and rollno is ${anyobj.rollno} and school name${anyobj.school}`)
}

// handleObject(user);
handleObject({
    username:"vikash",
    rollno:"22",
    school:"DAV"
});

//topic 5

//how to add Aarry in function

const myNewArray =[200,300,100,600];

function handleArray(getArray){
    return getArray[1];
}

// console.log(handleArray(myNewArray));
console.log(handleArray([200,300,100,600]));//ek hi line me Array dediya gya 

