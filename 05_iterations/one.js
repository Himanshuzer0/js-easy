// for 

// for (let index = 0; index < 10 ; index++){
//     const element = index ;
//     console.log(element);
// }

for(let i = 0 ; i<= 3; i++){
    const value = i;
    if(value == 2){
        // console.log("2 is best number");
    }
    // console.log(value);
}


for(let i = 1 ; i<=2; i++){
    //console.log(`outer loop value:${i}`);
    for(let j = 1 ; j <= 2; j++){
        // console.log(`Inner loop ${j} and inner loop ${i}`);
          //console.log(i + '*' + j + '=' + i*j);  
    }
}

let myArray = ["superman", "spiderman", "benten"]
//console.log(myArray.length);
for(let i = 0 ; i<myArray.length; i++){
    const value = myArray[i];
    //console.log(value);
}

for(let i=1 ; i<=10; i++){
    if(i == 5){
       // console.log(`detect 5`);
        break
    }
    //console.log(`value of i is ${i}`);
}


for(let i=1 ; i<=10; i++){
    if(i == 5){
        console.log(`detect 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}

