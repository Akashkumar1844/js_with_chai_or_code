//for of
//access all the element of the string ,array,object etc
const arr =[1,3,4,5,6,7]
for (const num of arr) {
    // console.log(num);
    
}
let greetings ="hello world";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
    
}

//Maps for of

const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"france")
map.set('IN',"India")

// console.log(map);
/*'IN' => 'India',
                'USA' => 'United States of America',
                'Fr' => 'france'*/

   //for(const key of map) {
    //console.log(key);
                        /*[ 'IN', 'India' ]
                        [ 'USA', 'United States of America' ]
                        [ 'Fr', 'france' ]*/
   //}            
for(const [key,value] of map){
    // console.log([key,'-->',value])
    /*[ 'IN', '-->', 'India' ]
      [ 'USA', '-->', 'United States of America' ]
      [ 'Fr', '-->', 'france' ]*/
}


   //forof loop in object

   const myObject ={
    ' game1':"candycrush",
   ' game2':"mario",
   'game3': "super mario"
   }

//    for(const game of myObject){
    // console.log(game);//myObject is not iterable
//    }


