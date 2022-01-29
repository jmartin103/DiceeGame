function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomNumber1 = generateRandomNumber(1, 6);
var randomNumber2 = generateRandomNumber(1, 6);

document.getElementById("img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.getElementById("img2").setAttribute("src", "images/dice"+randomNumber2+".png");

var heading = document.getElementById("winner");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!";
} else {
    heading.innerHTML = "Draw!";
}