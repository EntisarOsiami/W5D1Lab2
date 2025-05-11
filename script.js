let img = document.getElementById("coffeeImage");


fetch("https://api.cors.lol/?url=coffee.alexflipnote.dev/random.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);       
        img.src =  data.file;
        
    })


