class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    // getter lagane ke liye get likh lejea or jb getter hai to setter bhi likhna hoga
    get password(){
        return this ._password.toUpperCase() // class ke bahar se koi value get krna chahte ho to getter
    }
    set password(value){
        this._password = value
    }// koi value set krna chahte ho class ke andar to setter
    // get or set me underscore_ lagana pdega nhi to error aaega ye ki stack memory full

}

const himanshu = new User("him@.ai", "abc")
console.log(himanshu.password);
console.log(himanshu.email);
// kisi ko password ka access dena hi nhi chahte hai tb getter or setter use krte hai --> by default har class me hote hai 
