let img = document.getElementById("coffeeImage");

//the CORS proxy used to avoid CORS issues : https://cors.lol/

setInterval(() => {
    fetch("https://api.cors.lol/?url=coffee.alexflipnote.dev/random.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            img.src = data.file;
        })
        .catch((error) => {
            console.error("Error fetching coffee image:", error);
        });
}, 2000);


