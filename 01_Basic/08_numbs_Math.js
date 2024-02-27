const score = 300;
// console.log(score);//yaha per number console khud detect kiya hai 

const  balance = new  Number(600);//but yaha per number laga dene se confirm number hi rahega 
// console.log(balance);

//number to string 

// console.log(balance.toString());//600 yaha pr string hai to string property bhi lagega 
// console.log(balance.toString().length);


//tofixed medthod for give decimal value

// console.log(balance.toFixed(2));//600.00 fixed ke ander 2 means 2 decimal value

// const otherNumber = 23.890345;
// console.log(otherNumber.toPrecision(3));//Number of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// const numberTwo = 1000000;

// console.log(numberTwo.toLocaleString());//used for giving coma as indian or american order and make good to read 


// ++++++++++++++++++++Maths+++++++++++++++++++++++

// console.log(Math);//object

// console.log(Math.abs(-4));//negative positive me change hgon jata hai


// console.log(Math.round(4.34));//4 round figure the number
// console.log(Math.round(4.8));//5 round figure the number

// console.log(Math.ceil(4.2));//  5   tora sa jyda hoga number se then ushse badha number ans dega 

// console.log(Math.floor(4.9));// 4   decimal se ans nhi dega 

// console.log(Math.min(4,0,5,8,9));//return minimum value
// console.log(Math.max(4,0,5,8,9));//return maximum value

//random


console.log(Math.random());//return value between 0 and less then 1



console.log((Math.random()*10)+1);//number ko ek se jyda  lane ke liye but 1 add karne ka reason hai jab kabhi random number ka decimal ke bad 1 zero rahega tab output bhi zero hi aayega 0.0*10=0 eshliye 1 add kiye



console.log(Math.floor((Math.random()*10)+1));

//***********very important formula*********** */
const min =10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min+1))+min));







