// Computer choice function
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human choice function
function getHumanChoice() {
    while (true) {
        let choice = prompt("Choose between Rock, Paper, and Scissors => ");
        choice = choice.toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert(`Please enter a valid choice`);
        }
    }
}

// Variable
let humanScore = 0;
let computerScore = 0;

// Play round function
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    let winner = "";

    if (humanChoice === computerChoice) {
        winner = "Nobody";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        winner = "You";
        humanScore += 1;
    } else {
        winner = "Computer";
        computerScore += 1;
    }

    alert(`You picked ${humanChoice} and the computer ${computerChoice}. ${winner} won this round! The score is (You) ${humanScore} : ${computerScore} (Computer).`)

    return winner;
}