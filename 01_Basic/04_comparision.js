
///*********avoid this type of comparisons****** */

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);




// console.log("2" > 1);
// console.log("02" > 1); 


//comparison in null
// console.log(null >0); //false

// console.log(null ==0); //false

// console.log(null >=0); //true

/* this reason is that an equality check == and comparisions > < > = < = work differently.
comparisons convert null to a number , treating it as 0.
that's why null >= is true  and null > 0 is false.*/


// //comparisons check in undefined
// console.log(undefined >0); //false

// console.log(undefined ==0); //false

// console.log(undefined >=0); //false

//*****use these conversion******


// === (to strongly check the value as well as their datatype )

console.log("2" === 2);

