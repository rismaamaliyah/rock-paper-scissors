function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper, and Scissors.");

    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        return choice;
    } else {
        alert(`Please enter a valid choice`);
    }
}
