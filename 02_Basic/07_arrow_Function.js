const user ={
    username: "hitesh",
    price:"999",
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);//here 'this' is use for current context value ko refer kerta hai
        /* console.log(this);//this refer the current context value 
        hitesh,Welcome to website
        {
          username: 'hitesh',
          price: '999',
          welcomeMessage: [Function: welcomeMessage]
        }
        sam,Welcome to website
        {
          username: 'sam',
          price: '999',
          welcomeMessage: [Function: welcomeMessage]
        }*/
    }
}
// user.welcomeMessage();//hitesh,Welcome to website
// user.username ="sam";
// user.welcomeMessage();//sam,Welcome to website

// console.log(this);//{}current context empty show ker raha hai kiyo ki bracket ke bahr hai 


//part2

// function first(){
//     let username = "hitesh"
//     console.log(this.username)//undifined "this" ka use function me nhi ho rha hai object ki trah
// }
// first()

//part3 declaration of function by using arrow function

const chai =function(){
    let username = "hitesh"
     console.log(this.username)//undefined

}
chai()

//++part4 we also write in this way of arrow function
const chaipart2 = () => {
    let username = "hitesh"
     console.log(this.username)//undefined
     console.log(this)//{}

}
chaipart2()

//part5 pure or basic arrow function

const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(4,5))

//part6 we also write in one line without using return called implicite  return only for line of code

const addTwonumber = (num1,num2) => (num1 + num2) ;

console.log(addTwonumber(9,5))//14


//NOTE point --> curly brackets {} me return keyword likhna padhta hai , parenthese () me return use nhi kerte hai

//object return in arrow fiunction
const objectReturn = (username) => ({username:"Radhakrishna"}) ;

console.log(objectReturn())