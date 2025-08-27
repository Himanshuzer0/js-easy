const userEmail = []

if(userEmail) {
    console.log("Got the userEmail");
}
else {
    console.log("Don't have user Email");
}

// if(userEmail.length === 0){
//     console.log("Array empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined 

// let val1 ;
// val1 = null ?? 10 ?? 25
// console.log(val1)

// Terniary operator
// condition ? true : false

const mPrice = 100
mPrice <=80 ? console.log("less than 80")  : console.log("more than 80");