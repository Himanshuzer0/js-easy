let a = 300

if(true){
let  a = 10
const b = 20
var c = 30
// console.log( "Innervalue :",a )
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hanuman"

    function two(){
        const website = "youtube"
        console.log(username);
        //  console.log(website);
        
    }
    // console.log(website);
    two ()
}
// one ()

if(true){
    const username = "ram"
    if(username === "ram"){
        const website = " zomato"
        // console.log(username + website)
    }
}

//++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1

}

addTwo(5)
const addTwo = function(num){
    return num + 2

}
