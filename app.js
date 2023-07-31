let playerScore = 0;
let computerScore = 0;

//function for random computer play
function getComputerPlay() {
  const choices = ["r", "p", "s"];
  const randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}
console.log(getComputerPlay());
// function that plays a single round
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "It's a draw!";
  } else if (player == "r" && computer == "s") {
    return "You win! Rock beats Scissors";
  } else if (player == "s" && computer == "r") {
    return "Computer win! Rock beats Scissors";
  } else if (player == "p" && computer == "r") {
    return "You win! Paper beats Rock";
  } else if (player == "r" && computer == "p") {
    return "Computer win! Paper beats Rock";
  } else if (player == "s" && computer == "p") {
    return "You win! Scissors beat Paper";
  } else if (player == "p" && computer == "s") {
    return "Computer win! Scissors beat Paper";
  }
  console.log(playRound(playerSelection, computerSelection));
}
