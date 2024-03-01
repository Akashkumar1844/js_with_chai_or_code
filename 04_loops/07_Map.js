//Map

const myNumbs = [1,2,3,4,5,6,7,8,9,10]



// const newNumber = myNumbs.map( (num) => {
//     return num+10
// }) 
// console.log(newNumber);


//more then one property

const newNumber = myNumbs
.map( (num) => (num*10))
.map( (num) => (num/2))
.filter( (key) => (key < 35) )//true false value

console.log(newNumber)