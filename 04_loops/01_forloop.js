//for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element === 5)
//     {
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10; i++) {
//    console.log(`outer loop value:${i}`);
   for (let j = 0; j <=10 ; j++) {
    // console.log(`Inner loop value ${j} and inner loop${i}`)
    // console.log(`${i}*${j}=${i*j}`)
    

   }
   
    
}

// loop in array
 const MyArray = ["ram","radha","krishna"]
for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    console.log(element);
    
}


//break and continue


//break matlab jaha break statement rahega ushke niche wala print nhi hoga yaha 5 pe laga hai then 5 se print nhi hoga


for (let i = 1; i < 20; i++) {
    const element = i;
    if(i===5){
        break;
    }
    console.log(`value of i is ${i}`)
    
}

//continue matlab  ye jaha per laga hua hai then ush element ko chhor ker next se print hona start ho jayega yah per 5 pe continue laga hai to 5 ko skip ker dega


for (let i = 1; i < 20; i++) {
    const element = i;
    if(i===5){
        // console.log(`Detected 5`)
       continue;
    }
    console.log(`value of i is ${i}`)
    
}