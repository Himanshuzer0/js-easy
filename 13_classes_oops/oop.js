// object literals 
const user = {
    username : "Himanshu",
    logincount : 8,
    signedin : true,

// getUserDetails : function(){ 
//     console.log(this);
//    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

function User(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    return this

}

const userOne = new User("Hanuman", 15, true)
const userTwo = new User("Himanshu", 25, false)
// console.log(userOne);
// console.log(userTwo);



function car(make, model , year){
   this.make = make;
    this.model =  model ;
    this.year = year;
}

const  auto = new car ('Honda', 'Ford', 1999);

console.log(auto instanceof car);

console.log(auto instanceof Object);