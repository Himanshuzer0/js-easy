// primitive data types  or non-primitive or reference type  
 // All primitive types are call by value in this all data change in copy not original  
// 7 types : String , Number , Boolean , Null , Undefined , Symbol, BigInt. 

//---------------------------------------------------------------------------------------------------
const score = 100

const scorevalue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123') 
// id and anotherId both are not samme 
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 1234658745n // In the last "n" that convert number into bigInt 
// console.log(typeof bigNumber);




//----------------------------------------------------------------------------------------------------
// Reference type (Non primitive)
// In memory directely allocate reference 
//  Array , Objects , Functions .

const heros = ["Ram", "Hanuman"];
let myObj = {
    name: "Golu",
    age:22
}
// console.log(typeof heros);

// Function declare using  variable  and its called object function 
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Stack  (Primitive), Heap (Non_ Primitive ) 
// Stack memory used they give copy of variable 
// In Heap memory define they give reference of original value 


let myYoutubeName = "himanshubgmi" 
let anotherName = myYoutubeName
anotherName = "Javascript"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "admin@.com"
console.log(userOne.email);
console.log(userTwo.email);