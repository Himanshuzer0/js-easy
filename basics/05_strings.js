const name = "golu"
const repoCount = 50
 
// console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo is ${repoCount}`);


const gameName = new String('goluhc/upper')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt ('1'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);


const newStringOne = "  game  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "apple://golu.com/golu%2524hero"
console.log(url.replace('%2524','000port'));

console.log(url.includes('golu'));

console.log(gameName.split('/'));
