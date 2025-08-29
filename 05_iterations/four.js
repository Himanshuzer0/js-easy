const myObject ={
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

// for in loop
for(const key in myObject){
    //console.log(`${key} original name is ${myObject[key]}`);
}


// for in use for ARRAY

const value = ["js", "rb","py", "cpp"]

for(const key in value){
    console.log(value[key]);
}