/* Variables declared with the var keyword can NOT have block scope.

Variables declared inside a { } block can be accessed from outside the block.

Example
{
  var x = 2;
}
// x CAN be used here*/


var c =300
let a=200
if(true){
    let a =10
    const b=20
    var c =30
    // console.log("INNER",a);
}
// console.log(a)//excies outerpart of if200ans
// console.log(b)//error because scope of b inside the bracket
// console.log(c)//var can used outer inner value so it is not used in js code mainly



//function ke andar function scope 

function One(){
    const username ="radha ";
    

    function Two(){
        const website = "youtube";
        console.log(username)//username access ho raha hai one function ka value two function me le sakte hai
    }
    // console.log(website);//shoes error kiyo ki website two function ke andar decleared kiya gya
    Two()//two ko execute karenge tab hi two function ko use ker sakte hai

}

One();


// scope in if else condition

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);ye access nhi hua or error show kiya kiyoki website if statement ke andar hai 
}
// console.log(username);//same yaha bhi error show kiyo username if staement ke bahr hai

//++++++++++++++++++interesting+++++++++++++++++


// function declaration in js

// 1st normal method

Addone(6);//can access after  initialization as well as before initialization

function Addone(num){
    return num + 1
}




//2nd method function declaration by using datatype
Addtwo(7);//Cannot access 'Addtwo' before initialization

const Addtwo = function(num){
    return num+1;
}

Addtwo(7);//can access after initialization
