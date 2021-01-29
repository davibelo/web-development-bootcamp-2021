
// Draw a number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Get respective image name of the drawn number
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// Transform it to the source to be changed on html
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// Assign image1 variable as first image resulted with the query
var image1 = document.querySelectorAll("img")[0];
// Change image1 attribute to drawn number image
image1.setAttribute("src", randomImageSource);

// Doing the same to the second number (with less lines of code)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Changing tittle of the website according to the result of dices
// Because the website only have 1 h1 element, it is not necessary to use querySelectorAll
// querySelector is enough
if (randomNumber1 > randomNumber2) {
  document.querySelector("#title").innerHTML = "🚩 Play 1 Wins!";
  //document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}