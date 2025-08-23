
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

function userName(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userName("Hanuman"))
// console.log(userName());



function cartPrice(val1, val2,...num1){
     return num1
}

// console.log(cartPrice(200, 400, 500, 1000, 2000));

const user = {
    username : "ram",
    price : 199
}
// its a object then this object pass in the function



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}



//call the function
// handleObject(user)
handleObject({
    username: "sam",
    price : 400
})

// pass the array data type
const myNewArray = [200, 400 , 500, 800]

function manageArrayValue(Arrayget){
    return Arrayget[2]

}

// console.log(manageArrayValue(myNewArray));
console.log(manageArrayValue([200, 400, 500, 800]));