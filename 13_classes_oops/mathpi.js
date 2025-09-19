const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // define Hidden things on object 

// console.log(descripter);

// console.log(Math.PI); // universal constant --> that value doesn't change // & 3.14 is the PI value not Math

// Math.PI = 5
// console.log(Math.PI);

// Object declare 
const drink = {
    name: 'ginger',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("not working");
    }
}
console.log(Object.getOwnPropertyDescriptor(drink,"name")); // declare which property to gives

  //object ke andar properties ko define bhi kr skte hai
  Object.defineProperty(drink,'name', {
//     writable: false,
    enumerable: true,
//     configurable: false
 })

// console.log(Object.getOwnPropertyDescriptor(drink, "name"));

for (let [key, value] of Object.entries(drink)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}