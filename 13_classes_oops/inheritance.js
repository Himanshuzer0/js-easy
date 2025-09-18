class User{
    constructor(username){
        this.username = username 

    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email , password){
        super(username)
        this.email = email
        this.password = password 

    }
    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const him = new  Teacher("him", "him@45google.com", "12345")

him.logMe()
const himNew = new User("Himanshu")

himNew.logMe()


console.log(him instanceof Teacher );
console.log(him instanceof User);
