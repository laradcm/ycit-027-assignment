
const imgContainer = document.getElementsByClassName(".image-container")[0];
let imgCounter = 0;

function getCatImage() {

    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {

            return response.json();
        })
        .then((data) => {

            populateCatImg(data[0].url);

        });
}

function populateCatImg(data){

    let img;

    if (imgCounter > 0) {

        img = document.createElement("img");
        img.id = "catImage" + (imgCounter);

    } else { 

        img = document.getElementById("catImage");
    }

    img.src = data;
    img.style.visibility= "visible";
    imgContainer.appendChild(img);

    imgCounter++;
}

