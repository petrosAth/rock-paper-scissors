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
