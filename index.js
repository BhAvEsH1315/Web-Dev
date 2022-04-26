var x = document.querySelectorAll(".drum").length;

function handleclick() {
  var buttonINNEREHTML = this.innerHTML;
  var audio;
  makeSound(buttonINNEREHTML);
  buttonAnimation(buttonINNEREHTML);
  //
}

function buttonAnimation(currentKey) {
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");
  setInterval(remove, 200);

  function remove() {
    currentButton.classList.remove("pressed");
  }

}

for (var i = 0; i < x; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio('crash.mp3');
      audio.play();
      break;
    case "a":
      audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    case "s":
      audio = new Audio('snare.mp3');
      audio.play();
      break;
    case "d":
      audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case "j":
      audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case "k":
      audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case "l":
      audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    default:

  }
}
