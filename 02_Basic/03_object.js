// object literals


//how to declear a symbole
const mySymbole = Symbol("key1");
//object me decleard karne ke liye sabse pahle new symbole bana ke object me bada bracket ke andar key value likha jata hai 

const jsUser ={
     Name: "Radhe krishna",
    "full Name": "Radhe krishna",
    [mySymbole]: "mykey1",//symbole datatype when bracket is remove the it become a string
    age: 24,
    location: "mandu",
    email:"Radhkrishna@gmail.com",
    isloggedIn: false,
    LastLogInDays:["monday","tuesday"]
}

//How to access
// console.log(jsUser.email);//1st method
// console.log(jsUser["email"]);//2nd method
// console.log(jsUser["full name"]);//full name ko acces ker le rahe hai bracket se
// console.log(jsUser.full name);but yah nhi ker pa rahe hai 

// console.log(jsUser[mySymbole]);//data type symbole hi hoga

// console.log(typeof jsUser[mySymbole]);


//How to change or override object notation


// jsUser.email ="rajakash@gmail.com";
// console.log(jsUser.email);

// how to freeze object it means no one can change or override the value of object

// Object.freeze(jsUser);
// jsUser.email ="rajakash@gmail.com";
// console.log(jsUser.email);//after freeze this line not able to propagate

// console.log(jsUser);


//how to add function in object

jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.Name}`);//yaha per refer ker rahe object se function me value
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


