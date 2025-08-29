const coding = ["js", "ruby", "java", "python", "cpp"]
// call back function
// coding.forEach( function (val){
//     console.log(val);
// })


// Arrow function
coding.forEach( (item) => {
  //  console.log(item);

})

coding.forEach((item, index, arr)=>{
   // console.log(item, index, arr);

})


const myCoding = [
    {
        language : "javascript",
        fileName: "js"
    },
    {
        language: "python",
        fileName: "py"

    },
]

myCoding.forEach((item) =>{

    console.log(item.language);

})