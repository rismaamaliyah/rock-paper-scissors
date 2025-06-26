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
        let choice = prompt("Choose between Rock, Paper, and Scissors.");
        choice = choice.toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            alert(`Please enter a valid choice`);
        }
    }
}

// Play round function
function playRound(humanChoice, computerChoice) {
    let winner = "";

    if (humanChoice === computerChoice) {
        alert(`Both chose ${humanChoice}. It's a tie!`);
        winner = "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ) {
        winner = "You";
    } else {
        winner = "Computer";
    }
    return winner;
}

// Play game function
function playGame() {
    // Initialize score
    let humanScore = 0;
    let computerScore = 0;  

    // Play 5 rounds
    for (let round = 1; round <= 5; round++){
        alert(`Round ${round} of 5`);

        // Get choices for this round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Get the winner
        const roundWinner = playRound(humanChoice, computerChoice);

        // Get the score
        if (roundWinner === "You") {
            humanScore++;
        } else if (roundWinner === "Computer") {
            computerScore++;
        }

        alert(`Current score: You ${humanScore} - ${computerScore} Computer`);
    }

    // Determine final winner
    if (humanScore > computerScore) {
        alert(`You win the game! Final score: ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`Computer wins the game! Final score: ${humanScore}-${computerScore}`);
    } else {
        alert(`It's a tie! Final score: ${humanScore}-${computerScore}`);
    }
    
}

// Play
playGame();