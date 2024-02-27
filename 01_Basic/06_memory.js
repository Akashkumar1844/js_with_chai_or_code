//stack memory(primitive) , Heap memory(Non-primitive)


// stack memory(primitive)

let myYoutubename = "kingmaker";

let anotherName = myYoutubename ;// yaha per myyoutubenem variable ko copy ker raha hai  not change ker raha hai jisse original value me koyi bhe difference nhi aayega

anotherName = "chaiaurcode";//yaha per replace kiya

console.log(myYoutubename);//Kingmaker
console.log(anotherName);//chaiaurcode

let userone ={
    email: "user@google.com",
    upi:"akash@ybl" ,
}


let usertwo = userone;

usertwo.email = "rajakash@gmail.com";

console.log(userone.email);
console.log(usertwo.email);

// stack main copy milta  hai or heap me reference milta hai means jitna bhi add kerte hai value kjo vo original value me hi hota hai







































