const myNums = [1,2,3]

const myTotal=myNums.reduce(function (acc, currval) { 
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval}, 0)
// inval = 0
// const myTotal=myNums.reduce( (acc, currval) => acc + currval,inval,)

console.log(myTotal);




const shCart = [
    {
        itemName : "js course",
        price: 2999
    },
     {
        itemName : "py course",
        price: 999
    },
     {
        itemName : "web course",
        price: 5999
    },
     {
        itemName : "dev course",
        price: 12999
    },

]

const pricePay=shCart.reduce( (acc, item) =>  acc + item.price,0)
console.log(pricePay);