const marvel_heros =["thor", "Ironman","spiderman"];
const dc_heros = ["superman","flash","batman","wonderwoman"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//flash


// //two array merge in one array



// const allHeros= marvel_heros.concat(dc_heros)
// console.log(allHeros);


// // merger two array 2nd method

// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array =[1,2,3,4,[3,4,34],7,8,[4,5],["ram"]];


//Flat is used to merge two or more array in same line of array like as other element


// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);



// console.log(Array.isArray("RadheKrishna"));//isArray value to check weither it is an array or not



// console.log(Array.from("RadheKrishna"));//from is used to create given data in array 


// console.log(Array.from({name: "RadheKrishna"}))//agar object diya jaye from me to empty return karta hai kiyo ki pata nhi hota ki key ya value ko array banaye


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));



