let playerScore = 0;
let computerScore = 0;

function isGameOver() {
  if (playerScore >= 5 || computerScore >= 5) {
    return true;
  }
  return false;
}

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function showWinMsg(element, winner) {
  const playerWinMsg = "You Won!";
  const computerWinMsg = "Computer Won!";
  const tieMsg = "Tie!";

  if (winner === "player") {
    element.textContent = playerWinMsg;
  } else if (winner === "computer") {
    element.textContent = computerWinMsg;
  } else {
    element.textContent = tieMsg;
  }
}

function pickIcon(selection) {
  switch (selection) {
    case "Rock":
      return "fa-regular fa-hand-back-fist";
    case "Paper":
      return "fa-regular fa-hand";
    case "Scissors":
      return "fa-regular fa-hand-scissors";

    default:
      return "fa-solid fa-minus";
  }
}

function showResults(playerSelection, computerSelection) {
  let playerPickIcon = document.querySelector("#playerPickIcon");
  let computerPickIcon = document.querySelector("#computerPickIcon");
  let playerScoreValue = document.querySelector("#playerScoreValue");
  let computerScoreValue = document.querySelector("#computerScoreValue");

  playerPickIcon.setAttribute("class", pickIcon(playerSelection));
  computerPickIcon.setAttribute("class", pickIcon(computerSelection));

  playerScoreValue.textContent = playerScore;
  computerScoreValue.textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  let picksResultValue = document.querySelector("#picksResultValue");

  switch (computerSelection) {
    case "Rock":
      if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        showWinMsg(picksResultValue, "tie");
      } else if (playerSelection === "Paper") {
        playerScore++;
        showWinMsg(picksResultValue, "player");
      } else {
        computerScore++;
        showWinMsg(picksResultValue, "computer");
      }
      break;
    case "Paper":
      if (playerSelection === computerSelection) {
        showWinMsg(picksResultValue, "tie");
        playerScore++;
        computerScore++;
      } else if (playerSelection === "Scissors") {
        playerScore++;
        showWinMsg(picksResultValue, "player");
      } else {
        computerScore++;
        showWinMsg(picksResultValue, "computer");
      }
      break;
    case "Scissors":
      if (playerSelection === computerSelection) {
        showWinMsg(picksResultValue, "tie");
        playerScore++;
        computerScore++;
      } else if (playerSelection === "Rock") {
        playerScore++;
        showWinMsg(picksResultValue, "player");
      } else {
        computerScore++;
        showWinMsg(picksResultValue, "computer");
      }
      break;
    default:
      return "Invalid selection!";
  }
}

function announceResults() {
  let pickButtons = document.querySelectorAll(".pickButton");
  let resetButton = document.querySelector(".resetButton");
  let result = document.querySelector(".result");

  if (isGameOver()) {
    let resultValue = document.createElement("p");
    resultValue.classList.add("gameResultValue");

    pickButtons.forEach((element) => {
      element.style.display = "none";
    });
    resetButton.style.display = "block";
    result.style.display = "block";

    if (playerScore > computerScore) {
      showWinMsg(resultValue, "player");
    } else if (playerScore < computerScore) {
      showWinMsg(resultValue, "computer");
    } else {
      showWinMsg(resultValue, "none");
    }
    result.appendChild(resultValue);
  }
}

function game(e) {
  if (isGameOver()) {
    location.reload();
    return false;
  }

  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  showResults(playerSelection, computerSelection);
  announceResults();
}

const play = new (function() {
  let playerChoice = document.querySelector(".buttons");
  playerChoice.addEventListener("click", game);
})();
