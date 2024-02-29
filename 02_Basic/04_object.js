// object singleton

// const tinderUser = new Object()//singleton object
// const tinderUser ={}//Non singletomn object

// tinderUser.id = "123abc";
// tinderUser.name = "Sam";
// tinderUser.isLoggedIn = false
// // console.log(tinderUser);

const regularUser ={
    email: "Radhekrishna@gmail.com",
    fullName: {
        userfullname:{
            firstname:"Radhe",
            lastname:"Krishana"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

//combine two object

const obj1 ={1:"a",2: "b"}
const obj2 ={3:"c",4:"d"}
// const obj3 =  {obj1,obj2}


// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign({},obj1,obj2);//Object.assign is used to merge two object use kam hi hota hai

// console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//most used to merge two array

const obj4= {...obj1,...obj2};//most of the time use this type of object

// console.log(obj4);



// add object in array
const users =[
    {
        id:1,
        email:"radha@gmail.com"
    },
    {
        id2:2,
        email2:"radhabihari@gmail.com"
    },

    {
        id21:21,
        email3:"radhabiharilal@gmail.com"
    },
    {
        id21:21,
        email3:"radhabiharilal@gmail.com"
    }
]

// console.log(users);
const tinderUser ={}//Non singletomn object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false
// console.log(Object.keys(tinderUser));//to find keys  from object ans:= 'id', 'name', 'isLoggedIn' ]


// console.log(Object.values(tinderUser));//to find value of object[ '123abc', 'Sam', false ]

// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] entries se key and value ko ek array me convert ker diya gya


//to find that such properties are available in object or not

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//if has such property then give true else give false

//destructuring the object


const course ={
    coursename:"js in  hindi",
    price:"999",
    courseInstructor:"hitesh sir"
}

//course.courseInstructor se write karna complicated hai

const{courseInstructor:instructor}=course
// console.log(courseInstructor);//ke bajaye 
console.log(instructor);//hitesh sir




//API  in object
// {
//    " name" : "hitesh",
//    "couse" : "js in hindi",
//    "price" : "free"
// }

//API in array
[
    {},
    {},
    {}
]
