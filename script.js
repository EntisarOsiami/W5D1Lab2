let img = document.getElementById("coffeeImage");


setInterval(() => {
    fetch("https://coffee.alexflipnote.dev/random.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            img.src = data.file;
        })
        .catch((error) => {
            console.error("Error fetching coffee image:", error);
        });
}, 2000);


