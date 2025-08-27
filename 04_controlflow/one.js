// // // const isUserloggedIn = true 
// // const temperature = 41
// // if(temperature < 50){
// //     console.log("less than 50");
// // }
// // else {
// //     console.log("greatger than 50");
// // }
// // console.log("executed");
// const score = 200

// if(score > 100){
//     var power = " fly"
//     console.log(`user power  : ${power}`);
// }
// console.log(`user power  : ${power}`);

// const balance = 1000 
// // if(balance > 500) console.log("test");

// // nesterd if 
// if(balance < 500){
//     console.log("less than ");

// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

// used in real life
const userLogin = true
const debitCard = true
const logginFromGoogle = false
const logginFromEmail = true

if(userLogin && debitCard  && 2==2){
    console.log("Allow to buy  fruits");
}
if(logginFromGoogle || logginFromEmail){
    console.log("user loggin ");
}