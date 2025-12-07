var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var imagePath = "dice"+randomNumber1+".png";

var finalpath = "./images/" + imagePath ;

document.querySelector(".img1").setAttribute("src",finalpath);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var imagePath = "dice"+randomNumber2+".png";

var finalpath = "./images/" + imagePath ;

document.querySelector(".img2").setAttribute("src",finalpath);



function heading() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Win Player - 1"
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Win Player - 2"
    } 
    else {
        document.querySelector("h1").textContent = "Draw !! "
    }

}

heading();
