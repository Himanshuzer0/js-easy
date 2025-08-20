
// function is  a kyword & sayMyName is a variable
function sayMyName(){
    console.log("R");
console.log("A");
console.log("M");

}
// its all about function definition

// sayMyName ----> function reference
// sayMyName() -----> function execution 
//sayMyName()

// function addTwoNumber(number1 , number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(5, 6)


function addTwoNumber(number1 , number2){
    
    // let result = number1 + number2
    // return result 
    return number1 + number2
    
}

const result = addTwoNumber(5,6)

// console.log("Result :", result);

function userName(username = "ram"){
    if(username == undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(userName("Hanuman"))
console.log(userName())

