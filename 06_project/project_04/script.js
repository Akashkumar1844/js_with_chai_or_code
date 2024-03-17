const randomNo =parseInt(Math.random() * 100+1);
// console.log(randomNo);

const GuessesNo = document.querySelector("#guessNo");

const  submitNo = document.querySelector("#subm");
const  PreviousNo = document.querySelector("#previousguess");
const  RemainingNo = document.querySelector(".lastresult");
const  CheckNo = document.querySelector(".checkvalue");
const  Resultparas = document.querySelector("#resultmatch");

const p = document.createElement('p')

let prevGuess =[]

let numGuess =1
