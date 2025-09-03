const  clock = document.getElementById('clock');
// document.querySelector('#clock')


// console.log(date.toLocaleTimeString()); // only show time 
// console.log(date);  // this code show day date and time

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();


}, 10000); // 1000 means 1 sec delay code,  its method define  give a code and give me interval to run a code 
