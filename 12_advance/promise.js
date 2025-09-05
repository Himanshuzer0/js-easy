const promiseOne = new Promise(function (resolve, reject) {
        // Do an async task
            // DB calls ,  cryptography, network
                setTimeout(function () {
                        console.log('Async task is completed');
                        resolve()  // pass the resolve then connect .then
                            }, 1000)
                            })

                            promiseOne.then(function () {
                                console.log('Promise consumed');
                                })
 // without variable
 new Promise(function(resolve, reject){ 
    setTimeout(function(){
        console.log('Async task 2');
        resolve()

    }, 1000)


 })
 .then(function(){
    console.log('Async 2 resolved ');
 })

 
 const promiseThree = new Promise(function(resolve, reject){
    // esme network se data aaya ho to usee bhi pass krna hoga
    setTimeout(function(){
        resolve({username: "him", email : "him@12.com"}) // resolve me data pass kr diye lekin esse access kaise


    }, 1000)
 })

 promiseThree.then(function(user){  // resolve ke data ko yeha pe access kr liye 
    console.log(user);
 })

 // ---------------------
 const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Him", password: "12345"})
        }
        else{
            reject('ERROR : Something went wrong ')
        }

    }, 1000)

 })

 promiseFour.then((user) =>{
    //only user name chahiye
    console.log(user);
    return user.username


 })
 .then((username)=>{
    console.log(username);
 })
 .catch(function(error){
    console.log(error);
 })
 .finally(()=> console.log("The promise is either resolved or rejected"));


 //---------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Javascript", password: "12345"})
        }
        else{
            reject('ERROR : Js went wrong ')
        }

    }, 1000)


})

