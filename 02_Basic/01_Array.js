// //Array

const myArr =[0,1,2,3,4,5,"krishna","Radha"];
// console.log(myArr);
let myArr2 = new Array(2,3,4,5,"Ram");

// console.log(myArr2);
// console.log(myArr2[2]);

// //Array method

// myArr.push(6);//add element in last
// myArr.push(89);//add element in last

// myArr2.pop();//remove last one  element from Array 

// console.log(myArr);

// myArr2.pop("Ram");//Ram is remove from the Array
// console.log(myArr2);

// myArr.unshift(9);//add element in front of array
// myArr.shift();//remove 1st  element from Array 
// console.log(myArr);


// console.log(myArr2.includes("Ram"));//false boolean type

// console.log(myArr2.indexOf("Ram"));//-1 kiyo ki Ram exits nhi kerta array me


const newArr = myArr.join();
console.log(myArr);
console.log(myArr2);
console.log(newArr);
// console.log(typeof myArr);//object 
// console.log(typeof newArr);//string  .join object ko string me change ker diya


// slice, splice

// let newArr =[1,3,4,5,7,8];
// console.log("A",newArr);
// console.log(newArr.slice(1,4));//last edge not included


// output:-A [ 1, 3, 4, 5, 7, 8 ]
// [ 3, 4, 5 ]
 
// console.log("B",newArr);
// console.log(newArr.splice(1,4));

// output:-
// B [ 1, 3, 4, 5, 7, 8 ]
// [ 3, 4, 5, 7 ]

// console.log(newArr);//[ 1, 8 ] splice kerne ke bad newArr me sirf yahi element bachha 

//majar difference in slice and splice
/*
slice me given array per koyi bhi effect nhi padhta sirf ushse element mil jata hai

but splice me edge to result me aata hi hai saath hi jo result me aaaya vo array se nikal jata hai 
[2,3,4,5,6]
ka splice(1,2)
ans [3,4]
or remaining [2,5,6] hi array me rahega  */


