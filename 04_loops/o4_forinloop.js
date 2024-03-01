//for object value new for loop called forin 
const myObject ={
    ' game1':"candycrush",
   ' game2':"mario",
   'game3': "super mario"
   }
for(const key in myObject){
    // console.log(myObject[key]);
    //candycrush
    //mario
    //super mario
}
for(const key in myObject){
    // console.log(key);
    // game1
    //game2
   // game3
}
for(const key in myObject){
    // console.log(`the object keyis${key}and their object is${myObject[key]}`)
}


// forin in Array

const language = ["hindi", "english","marathi","khortha"];

for(const key in language){
    console.log(key);//output gives index number
}
for(const key in language){
    console.log(language[key]);
    //hindi
    // english
    // marathi
    // khortha
}

//in Maps  forin loop is not iterable