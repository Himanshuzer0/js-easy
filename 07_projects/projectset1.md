# Project related to DOM

# solution code 

## project 1 box color selector

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>BAckground color switcher</title>
</head>

<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a target="" href="youtube.com">Youtube Channel</a>
    </nav>
    <div class="canvas">
        <h1> switcher</h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
        <h2>Try clicking on 
            <span>this page</span>
        </h2>

    </div>
    <script src="index.js"></script>

</body>

</html>

```

## css code
```
html {
    margin : 0;
}


span{
    display : block;
}

.canvas{ 
    /* border:2px solid blue; */
    margin: 100px auto 100px;
    width : 80%;
    text-align: center;
    /* background-color: rgba(29, 116, 79, 0.397); */
    
}



.button{
    width:100px;
    height:100px;
    display:inline-block;
    border: 2px solid black;
}
#grey{
    background-color: grey;
}

#white{
    background-color: white;
}

#blue{
    background-color: blue;

}

#yellow{
    background-color: yellow;
}

```

## JS code 

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// events

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
    
        if(e.target.id === "grey"){
            body.style.backgroundColor = "grey";
            // body.style.backgroundColor = e.target.id; // change the all box color
            
        }

         if(e.target.id === "white"){
            body.style.backgroundColor = "white";
         }

          if(e.target.id === "blue"){
            body.style.backgroundColor = "blue";
                

          }

           if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
           }
    });
});


```