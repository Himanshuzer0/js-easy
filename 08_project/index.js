const form = document.querySelector('form')

// form will submit then use POST & GET than whenever submit the from they go through the server but this time stop the sever
form.addEventListener('submit', function(e){

    e.preventDefault()  // its means not submit  for 1 min  

    const height = parseInt(document.querySelector('#height').value); // convert value string to int use of parseInt
    const weight = parseInt(document.querySelector('#weight').value);
     const results = document.querySelector('#results');

    if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please give a valid height  ${height}`; // show value on click button  , this value show a message 


    } else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    }  
     // calculate BMI
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2) ;// .toFixed(2) its means the given value only show 2 decimal value not all

         
        let message = "";
        if(bmi < 18.6){
            message = "You are underweight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            message = "You are Normal Range";
        }
        else{
            message ="You are OverWeight";
        }

        // show the result
        results.innerHTML = `<span>Your BMI is <b>${bmi}</b>.${message}</span>`;

        

    }

}) ; 
