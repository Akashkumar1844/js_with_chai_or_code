const coding = ['js','python','java','cpp','c'];
// type 1
// coding.forEach( function (item){
//     console.log(item);

// })

//arrow function type2

// coding.forEach((item)=>{
//  console.log(item)
// })

//type3

// function printMe(item){
//     console.log(item);

// }

// coding.forEach(printMe)

//get item, index, arrayof the item

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)

// })

const myCoding =[
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"python",
        languageFile:"pyh"
    },
    {
        languageName:"jc++",
        languageFile:"cpp"
    },
    {
        languageName:"java",
        languageFile:"java"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);//output
    // javascript
    // python
    // jc++
    // java
})
myCoding.forEach( (item) => {
    console.log(item.languageFile);//output
    // js
    // cpp
    // pyh
    // java
})