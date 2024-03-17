// const promiseOne =new Promise(function (resolve,reject){
//     //Do an async task
//     //DB calls,cryptography,network
    

//     setTimeout(function (){
//         console.log('Async task is complete')
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")

// })

//type 2(two)


// new promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async  task 2 ")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async 2 resolve")
// });


//type3


const promisethree = new Promise((resolve, reject) => {setTimeout(function(){
    resolve({username: "chai",email:"rajakash@gmail.com"})
},1000)
    
})
promisethree.then(function(user){
    console.log(user);

})

//type 4
const promiseFour = new promisethree(function(resolve,reject){
     setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})

        }
        else{
            reject('ERROR:something went wrong')
        }
     },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username  ;
}).then((username) => {
    console.log(username);
   
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either resolve or rejectd"))

//type 5

const promiseFive = new promise( )

