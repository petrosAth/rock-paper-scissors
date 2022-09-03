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

function getPlayerChoice() {
    let userInput = prompt(
        "Choose 'Rock', 'Paper' or 'Scissors': "
    ).toLowerCase();

    let capitalizeFirstLetter = userInput.charAt(0).toUpperCase();
    const playerSelection = capitalizeFirstLetter + userInput.slice(1);

    return playerSelection;
}

function playRound(playerSelection, computerSelection, score) {
    const winMsg = `You Win! ${playerSelection} wins ${computerSelection}`;
    const loseMsg = `You Lose! ${computerSelection} wins ${playerSelection}`;
    const tieMsg = `Tie!`;

    switch (computerSelection) {
        case "Rock":
            if (playerSelection === computerSelection) {
                score.player++;
                score.computer++;
                return tieMsg;
            } else if (playerSelection === "Paper") {
                score.player++;
                return winMsg;
            } else {
                score.computer++;
                return loseMsg;
            }
        case "Paper":
            if (playerSelection === computerSelection) {
                score.player++;
                score.computer++;
                return tieMsg;
            } else if (playerSelection === "Scissors") {
                score.player++;
                return winMsg;
            } else {
                score.computer++;
                return loseMsg;
            }
        case "Scissors":
            if (playerSelection === computerSelection) {
                score.player++;
                score.computer++;
                return tieMsg;
            } else if (playerSelection === "Rock") {
                score.player++;
                return winMsg;
            } else {
                score.computer++;
                return loseMsg;
            }
        default:
            return "Invalid selection!";
    }
}

function game() {
    const score = {
        player: 0,
        computer: 0,
    };

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice(), score));
    }

    if (score.player > score.computer) {
        console.log(`The final score is: ${score.player}-${score.computer} - You Won!`);
    } else if (score.player < score.computer) {
        console.log(`The final score is: ${score.player}-${score.computer} - You Lose!`);
    } else {
        console.log(`The final score is: ${score.player}-${score.computer} - It's a Tie!`);
    }
}

game();
