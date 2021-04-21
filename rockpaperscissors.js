// Algorithm:

// Game prompts player to pick between rock, paper or scissors.
// Computer picks between rock, paper, or scissors.
// It will be Best of 5 (first to 3 wins).
// Console prints the winner/loser and selections after each round.
// Ties and invalid picks will not coount, and the round will be reset.
// Game ends once the 3rd win has been decided.

//Establishes both of the initial wins of the Player and Computer wins as 0.
let playerWins = 0;
let computerWins = 0;

//Repeats the game until either the Player or Computer reach 3 wins. The first to 3 wins wins the game.
//Ties and invalid entries by the Player do not count as wins nor losses for either opponent.
while (playerWins < 3 && computerWins < 3) {

    //Player wins are less than or equal to 2

    //Player (user) selects rock, paper, or scissors
    function playerPlay() {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        return playerSelection.toLowerCase();
    }

    //Prints player's choice.
    let playerSelection = playerPlay();
    console.log("The player has selected " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ".");

    //Computer selects rock, paper, or scissors
    function computerPlay() {
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
    let computerSelection = computerPlay();
    console.log("The computer has selected " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ".");

    //A round of rock, paper, scissors is played. The winner of the result is determined.
    function playRound(playerSelection, computerSelection) {
        let result;
        if (playerSelection === "rock" && computerSelection === "rock") {
            result = "Tie! Both players selected Rock. Score does not change.";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            result = "Computer wins, Paper beats Rock!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "Player wins, Rock beats Scissors!";
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "Player wins, Paper beats Rock!";
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            result = "Tie! Both players selected Paper. Score does not change.";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "Computer wins, Scissors beats Paper!";
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "Computer wins, Rock beats Scissors!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "Player wins, Scissors beats Paper!";
        } else if (playerSelection === "scissors" && computerSelection === "scissors") {
            result = "Tie! Both players selected Scissors. Score does not change.";
        } else {
            result = "You did not pick a valid option! Score does not change.";
        }
        return result;

    }

    //Prints the decision of the round.
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    //If player wins, this adds a tally in their win column.
    function playerWinCount(result) {
        if (result == "Player wins, Rock beats Scissors!" || result == "Player wins, Paper beats Rock!" || result == "Player wins, Scissors beats Paper!") {
            playerWins += 1;
        }
        return playerWins;
    }

    //Prints the total number of wins that the player has.
    playerWins = playerWinCount(result);
    console.log("The player has " + playerWins + " win(s).");

    //If computer  wins, this adds a tally in their win column.
    function computerWinCount(result) {
        if (result == "Computer wins, Rock beats Scissors!" || result == "Computer wins, Paper beats Rock!" || result == "Computer wins, Scissors beats Paper!") {
            computerWins += 1;
        }
        return computerWins;
    }

    //Prints the total number of wins that the computer has.
    computerWins = computerWinCount(result);
    console.log("The computer has " + computerWins + " win(s).");

}