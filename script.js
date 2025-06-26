// Computer choice function
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

// Human choice function
function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper, and Scissors.");

    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        alert(`Please enter a valid choice`);
    }
}

// Variable
let humanScore = 0;
let computerScore = 0;

// Play round function
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let comparison = humanChoice + "-" + computerChoice;
    let winner = "";

    switch (comparison) {
        case "rock-scissors" || "paper-rock" || "scissors-paper":
            winner = "You";
            humanScore += 1;
            break;
        case "scissors-rock" || "rock-paper" || "paper-scissors":
            winner = "Computer";
            computerScore += 1;
            break;
        default:
            winner = "Nobody";
    }
}