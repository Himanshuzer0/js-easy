// // ES6

// class User{
//     constructor(username, email, password){
//         this.username = username ;
//         this.email = email ;
//         this.password = password
//     }
//     encryptPassword(){
    
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const him = new User("him","him@gmail.com" , "123")

// console.log(him.encryptPassword());
// console.log(him.changeUsername());

// behind the scene --> class functionality not available

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password

}
 User.prototype.encryptPass = function(){
    return `${this.password}abc`
 }

 User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
 }

 const ram = new User("ram", "ram123@gmail.com", "12345")

console.log(ram.encryptPass()); 
console.log(ram.changeName());