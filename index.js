var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var pic1 = "dice" + randomNumber1 + ".png";
var pic2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", pic1);
document.querySelectorAll("img")[1].setAttribute("src", pic2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}else {
  document.querySelector("h1").innerHTML = "Draw";
}
