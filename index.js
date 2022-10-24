let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelectorAll("img")[0]
  .setAttribute("src", "images/" + "dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelectorAll("img")[1]
  .setAttribute("src", "images/" + "dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerText = "Game is a draw";
}
