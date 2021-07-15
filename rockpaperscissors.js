let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click", function (e) {
        //Best out of 5 (first to 3 wins)
        if (playerWins < 3 && computerWins < 3) {

            //Player (user) selects rock, paper, or scissors
            function pickPlayerChoice() {
                let playerSelection = e.target.id;
                return playerSelection;
            }

            //Prints player's choice.
            let playerSelection = pickPlayerChoice();
            document.getElementById("playerSelection").innerText = "Player has selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".";

            //Computer selects rock, paper, or scissors
            function pickComputerChoice() {
                const min = Math.ceil(0);
                const max = Math.floor(3);
                let computerRandomNumber = Math.floor(Math.random() * (max - min) + min)
                let computerSelection;
                if (computerRandomNumber === 0) {
                    computerSelection = "rock";
                } else if (computerRandomNumber === 1) {
                    computerSelection = "paper";
                } else {
                    computerSelection = "scissors";

                }
                return computerSelection;
            }

            //Prints computer's choice.
            let computerSelection = pickComputerChoice();
            document.getElementById("computerSelection").innerText = "Computer has selected " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ".";

            //A round of rock, paper, scissors is played. The winner of the result is determined.
            function playRound(playerSelection, computerSelection) {
                let result;
                if (playerSelection === "rock" && computerSelection === "rock") {
                    result = "Tie! Both players selected Rock. Score does not change.";
                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    result = "Computer wins this round, Paper beats Rock!";
                } else if (playerSelection === "rock" && computerSelection === "scissors") {
                    result = "Player wins this round, Rock beats Scissors!";
                }
                else if (playerSelection === "paper" && computerSelection === "rock") {
                    result = "Player wins this round, Paper beats Rock!";
                } else if (playerSelection === "paper" && computerSelection === "paper") {
                    result = "Tie! Both players selected Paper. Score does not change.";
                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    result = "Computer wins this round, Scissors beats Paper!";
                }
                else if (playerSelection === "scissors" && computerSelection === "rock") {
                    result = "Computer wins this round, Rock beats Scissors!";
                } else if (playerSelection === "scissors" && computerSelection === "paper") {
                    result = "Player wins this round, Scissors beats Paper!";
                } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                    result = "Tie! Both players selected Scissors. Score does not change.";
                } else {
                    result = "You did not enter a valid option! Score does not change.";
                }
                return result;

            }

            //Prints the decision of the round.
            let result = playRound(playerSelection, computerSelection);
            document.getElementById("result").innerText = result;

            //If player wins, this adds a tally in their win column.
            function countPlayerWins(result) {
                if (result == "Player wins this round, Rock beats Scissors!" || result == "Player wins this round, Paper beats Rock!" || result == "Player wins this round, Scissors beats Paper!") {
                    playerWins += 1;
                }
                return playerWins;
            }

            //Prints the total number of wins that the player has.
            playerWins = countPlayerWins(result);
            document.getElementById("playerWins").innerText = playerWins;

            //If computer  wins, this adds a tally in their win column.
            function countComputerWins(result) {
                if (result == "Computer wins this round, Rock beats Scissors!" || result == "Computer wins this round, Paper beats Rock!" || result == "Computer wins this round, Scissors beats Paper!") {
                    computerWins += 1;
                }
                return computerWins;
            }

            //Prints the total number of wins that the computer has.
            computerWins = countComputerWins(result);
            document.getElementById("computerWins").innerText = computerWins;

            if (playerWins === 3 && computerWins > 0) {
                document.getElementById("endMessage").innerText = "The Player has won the game!";
            } else if (playerWins === 3 && computerWins === 0) {
                document.getElementById("endMessage").innerText = "The Player has won the game! It's a clean sweep!";
            } else if (computerWins === 3 && playerWins > 0) {
                document.getElementById("endMessage").innerText = "The Computer has won the game!";
            } else if (computerWins === 3 && playerWins === 0) {
                document.getElementById("endMessage").innerText = "The Computer has won the game! It's a clean sweep!";
            } else {
                document.getElementById("endMessage").innerText = "Select Rock, Paper, or Scissors to play the next round!";
            }
        }
    });
}
