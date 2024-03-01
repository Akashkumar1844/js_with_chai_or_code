//Immediately Invoke Function Expressions(IIFE)

//()() ,here first parenthese represent function and 2nd Invoke the function excution
// namedIIFE
(function Firstex(){
    // console.log(`DDB connected`) //DDB connected output
})();

//IIFE --> jo function immediate exeucute ho jaye 
//iife --> ka use globle scope ke pollution se problem hota hai ush hatne  ke liye kiya jata hai


//for arrow function
(() => {
   console.log(`Db connected`) //Db connected
})();// do IIFE function ko likhne per semicolon ka use kerna padhega


//provide some data
((name) => {
   console.log(`Db connected for ${name}`) //Db connected for RadhaKrishna
})("RadhaKrishna");