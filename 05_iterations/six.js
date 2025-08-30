// const coding = ["js", "ruby", "py"]

// const values = coding.forEach((item)=>{
//     console.log(item);

// })

// console.log(values);
//---------------------------------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter(  (num)  => num > 4) 
// console.log(newNums);
//---------------------------------------------------------------
// use of scope keyword

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter(  (num)  => {
//     return num>4
// })


// console.log(newNums);
const books = [
    { title: 'Book One', genre: 'Friction', publish: 1985, edition: 2010 },
    { title: 'Book Two', genre: 'History', publish: 1999, edition: 2011 },
    { title: 'Book Three', genre: 'Non-Fiction', publish: 2015, edition: 2018},
    { title: 'Book Four', genre: 'Science', publish: 2011, edition: 2017 },
    { title: 'Book Five', genre: 'Friction', publish: 2018, edition: 2022 },
    { title: 'Book Six', genre: 'History', publish: 1945, edition: 2025 },
    { title: 'Book Seven', genre: 'Science', publish: 1987, edition: 2010 },
    { title: 'Book Eight', genre: 'Non-Friction', publish: 1989, edition: 2012 },
    { title: 'Book Nine', genre: 'Science', publish: 2014, edition: 2025 },
] ;
let userBooks = books.filter( (bk) =>bk.genre === 'History')
 userBooks = books.filter( (bk) =>bk.publish >= 2000 && bk.genre ==="Science")
console.log(userBooks);