const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const yourScore = document.getElementById("your-score");
const comScore = document.getElementById("com-score");

let randomMove;
let myChoice;

let myCount = 0;
let comCount = 0;

function generateComputerChoice() {
  const MOVES = ["Rock", "Paper", "Scissors"];

  let randomIndex = Math.floor(Math.random() * MOVES.length);
  randomMove = MOVES[randomIndex];
  computerChoiceDisplay.innerHTML = randomMove;
}

function determineWin() {
  if (myChoice === "Rock" && randomMove === "Scissors") {
    resultDisplay.innerHTML = "You win!";
    myCount++;
    yourScore.innerHTML = myCount;
  } else if (myChoice === "Paper" && randomMove === "Rock") {
    resultDisplay.innerHTML = "You win!";
    myCount++;
    yourScore.innerHTML = myCount;
  } else if (myChoice === "Scissors" && randomMove === "Paper") {
    resultDisplay.innerHTML = "You win!";
    myCount++;
    yourScore.innerHTML = myCount;
  } else if (myChoice === randomMove) {
    resultDisplay.innerHTML = "Draw!";
  } else {
    resultDisplay.innerHTML = "You lose!";
    comCount++;
    comScore.innerHTML = comCount;
  }
}

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    resultDisplay.innerHTML = "";
    resultDisplay.innerHTML = "Ready...";
    yourChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    setTimeout(() => {
      myChoice = e.target.id;
      yourChoiceDisplay.innerHTML = myChoice;
      generateComputerChoice();
      determineWin();
    }, 3000);
  })
);
