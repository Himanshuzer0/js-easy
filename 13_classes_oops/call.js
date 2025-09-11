function SetUsername(username){
    // comples DB calls
    this.username = username
    console.log("called");
}

function createUser(username , email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const him = new createUser("him","him@fb.com", "12345")
console.log(him);