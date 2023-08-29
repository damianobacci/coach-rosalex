const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let randomMove;

function generateComputerChoice() {
  const MOVES = ["Rock", "Paper", "Scissors"];

  let randomIndex = Math.floor(Math.random() * MOVES.length);
  randomMove = MOVES[randomIndex];
  computerChoiceDisplay.innerHTML = randomMove;
}

function determineWin() {
  if (myChoice === "Rock" && randomMove === "Scissors") {
    resultDisplay.innerHTML = "You win!";
  } else if (myChoice === "Paper" && randomMove === "Rock") {
    resultDisplay.innerHTML = "You win!";
  } else if (myChoice === "Scissors" && randomMove === "Paper") {
    resultDisplay.innerHTML = "You win!";
  } else if (myChoice === randomMove) {
    resultDisplay.innerHTML = "Draw!";
  } else {
    resultDisplay.innerHTML = "You lose!";
  }
}

let myChoice;
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    resultDisplay.innerHTML = "";
    myChoice = e.target.id;
    yourChoiceDisplay.innerHTML = myChoice;
    generateComputerChoice();
    determineWin();
  })
);
