// for of

//["", "", ""] // for array strings
//[{},{},{}] //for array object


// const arr = [1,2,3,4,5]

// for (const value of arr){
//     console.log(value);
// }

// const i = "Sri Ram!"
// for(const p of i ){
//     console.log(`each character is ${p}`);
// }


//-------------------------------------------------------
// MAps 

//maps its like a Array

// const map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// console.log(map.get("a"));
// // Expected output: 1

// map.set("a", 97);

// console.log(map.get("a"));
// // Expected output: 97

// console.log(map.size);
// // Expected output: 3

// map.delete("b");

// console.log(map.size);
// // Expected output: 2



const map = new Map()

map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")
// console.log(map);

for( const [key, value]  of map){
    // console.log(key, ':-', value);
}


// for object 
 const myObject = {
    game1: 'bgmi',
    game2: 'cod'
 }

//  for( const [key, value] of myObject  ){
//     console.log(key, ':-', myObject);
//  }