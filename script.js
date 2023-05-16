"use strict";

console.log(
  document.querySelector(".message").textContent,
  "document.querySelector"
);

// document.querySelector(".number").textContent = 14;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 230;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// const guess = Number(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  // When there is no input
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
    // displayMessage("No number!");
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    console.log("You are the winner!");
    // displayMessage('correct Number!')
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    console.log(score, "***********************");
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      console.log("You Lost");
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;

  console.log(secretNumber);
});

console.log(secretNumber);
