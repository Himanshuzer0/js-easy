// singleton 
// in literal no singleton // in constructor yes singleton

// object literals 
// Object.create -- constructor method in singleton 
const mySym = Symbol("key1")
const Jsuser = {
    name: "Ram",
    "full name": "Ram hanuman",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ram@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Friday"]
}
// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

// change a email
// Jsuser.email = "ram@chatgpt.com"
// Object.freeze(Jsuser)
// Jsuser.email = "ram@instop.com"
// console.log(Jsuser)


Jsuser.hello = function(){
    console.log("hii");
}

Jsuser.hello2= function(){
    console.log(`hii,${this.name}`);
}
console.log(Jsuser.hello());
console.log(Jsuser.hello2());
