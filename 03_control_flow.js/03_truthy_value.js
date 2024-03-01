// const userEmail ="raajakash@gmail.com";

// if(userEmail){
//     console.log("Got user Email")
// }
// else{
//     console.log("Don't have user email")
// };

// output:--
// Got user Email

// if statement  condition me to truth value mangta hai then execute kerta hai but condition me value exits ker raha hai tab truth man liya ja raha hai

// const userEmail1 ="";

// if(userEmail1){
//     console.log("Got user Email")
// }
// else{
//     console.log("Don't have user email")
// };

//output:=Don't have user email
//yaha per condition me value nhi exist ho raha hai then ushe false maan liya gya

// const userEmail2 =[];

// if(userEmail2){
//     // console.log("Got user Email")
// }
// else{
//     // console.log("Don't have user email")
// };

// output:=Got user Email
//empty array  truthy value hai

/*falsy values

false , 0, -0 ,BigInt 0n, "", null, undifined,NaN


truthy values
rest of all are truthy value
 
"0",'false',"space ",[],{},function(){}


*/

//How to check empty array is truthy value

// const MyArray =[];

// if(MyArray.length === 0){
//     // console.log("length is zero")//length is zero executed that means truthy value
// }

// //How to check emptyobject is truthy value

// const myObject = {};

// if(Object.keys(myObject).length === 0){
//     // console.log("MyObject length os zero")//MyObject length os zero executed that means truthy value
// }



// Nullish Coalescing Opeator(??):null undefined

// let val1;
// val1 = 5??10

// console.log(val1)//ans 5 agar dono value me se koyi bhi value null/undefined nhi hai then 1st value outout me aayega


let val2;
val2 = null ?? 10

console.log(val2)//ans 10 agar dono value me se koyi bhi value null/undefined  hai then 2nd value outout me aayega


let val3;
val3 = undefined ?? 10

console.log(val3)//ans 10 agar dono value me se koyi bhi value null/undefined  hai then 2nd value outout me aayega


let val4;
val4 = undefined ?? 10 ?? 5

console.log(val4)//10 1st right value  output me aayega


//Terniary Operator

// syntax condition ? if true : if false

const NUmberOficecube = 100;

NUmberOficecube >=80 ? console.log("ice cube is enough for party"):console.log("NOt sufficent")//ice cube is enough for party

NUmberOficecube <=80 ? console.log("ice cube is enough for party"):console.log("NOt sufficent")//NOt sufficent