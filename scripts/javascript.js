function getComputerChoice() {
    const num = Math.floor(Math.random() * 100);
    if (num < 33) {
        return "Rock";
    } else if (num < 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("computerSelection: " + computerSelection); // NOTE: used for debugging
    console.log("playerSelection: " + playerSelection); // NOTE: used for debugging

    let capitalizeFirstLetter = playerSelection.charAt(0).toUpperCase()
    let lowerCaseString = playerSelection.toLowerCase().slice(1);
    playerSelection = capitalizeFirstLetter + lowerCaseString;

    let winMsg = `You win! ${playerSelection} wins ${computerSelection}`;
    let loseMsg = `You lose! ${computerSelection} wins ${playerSelection}`;
    let tieMsg = `Tie!`;

    switch (computerSelection) {
        case "Rock":
            if (playerSelection === computerSelection) {
                return tieMsg;
            } else if (playerSelection === "Paper") {
                return winMsg;
            } else {
                return loseMsg;
            }
        case "Paper":
            if (playerSelection === computerSelection) {
                return tieMsg;
            } else if (playerSelection === "Scissors") {
                return winMsg;
            } else {
                return loseMsg;
            }
        case "Scissors":
            if (playerSelection === computerSelection) {
                return tieMsg;
            } else if (playerSelection === "Rock") {
                return winMsg;
            } else {
                return loseMsg;
            }
        default:
            return "Wrong selections!";
    }
}

console.log(playRound("Rock", getComputerChoice()));
