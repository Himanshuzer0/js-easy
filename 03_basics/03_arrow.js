const user = {
    username : "ram",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "hanuman"
// user.welcomeMessage()

//   console.log(this);
 
// function ram(){
//     let userName = "hanuman"
//     console.log(this.userName);
// }
// ram()

// function declare using arrow function 
// const coffe = function (){
//     let userName = "hanuman"
//     console.log(this.userName);

// }

const coffe = () => {
    let userName = "hanuman"
    console.log(this);

}
// coffe()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,8))

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) =>({ username : "hanuman"})
console.log(addTwo(5,8))