const myArr = [1,2,3,4,5] 
 const myHero = ["ram", "hanuman"]

 const myArray2 = new Array(1,2,3,4,5)

//  console.log(myArr[0]);
//  console.log(myHero[1]);
//  console.log(myArray2);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof myArr);


// slice , splice 
console.log("A" , myArr);

const myn1 = myArr.slice(2,4)
console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(2,4)
console.log(myn2);
console.log("c" , myArr);






