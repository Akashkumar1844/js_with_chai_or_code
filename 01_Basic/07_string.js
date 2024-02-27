// To decleard the string

// const name = "Krishhhhhhhh";

// const rollno = "21";

// console.log(`${name} sunta honey number one Rollnumber${rollno}`);


//another form


// const gameName = new  String('Akashkumar')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));//h find the position of character  (string).

// console.log(gameName.__proto__);
// console.log(gameName[5]);
// console.log(gameName.indexOf('h'));//4{ to find the index of the string.}

// console.log(gameName.length);// To find the length of string

// const newString = gameName.substring(0,3);
// console.log(newString);// to print the string start with 0 index to less then the given index i.e 3 means 0,1,2 only print these value  ** agar negative value diya jayega to console obey nhi karega or 0 se start karega

// const anotherString = gameName.slice(-6,4);
// console.log(anotherString);// to print the value in -ve order 


const trimeString = "    radheKrishana    ";

console.log(trimeString);//    radheKrishana     printed with extra spaces 
console.log(trimeString.trim());//printed without any extra spaces or remove extra space from string


//replace kerne ka kam kerta hai

const url = " raj-akash-#-gmail-com";
console.log(url.replace('#','@'));//rajakash@gmail.com


//include :- use puchne ke liye ---string present hai ya nhi

console.log(url.includes("raj"));//true value comes


// to convert string in array

console.log(url.split('-'));//split contain separator  and limit .'-' here  is separator


