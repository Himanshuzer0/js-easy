const marvel = ["himanshu","golu","hanuman"]
const dc = ["ram","krishna","garuda"]

// marvel.push(dc)

// console.log(marvel);

const new_hero = [...marvel, ...dc]
// console.log(new_hero);


const arr2 = [1,2,3,[4,5,5,6],7,8,[7],5,[4,5]]
const other_arr3 = arr2.flat(Infinity)
// console.log(other_arr3);

// console.log(Array.isArray("Himanshu"))
// console.log(Array.from("Himanshu"))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,  score3));


