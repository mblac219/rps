let playerScore = 0;
let computerScore = 0;

//function for random computer play
function getComputerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}
console.log(getComputerPlay());

const game = () => {
  //while loop plays 5 rounds
  while (playerScore <= 4 && computerScore <= 4) {
    // function that plays a single round
    function playRound(playerSelection, computerSelection) {
      const player = playerSelection.toLowerCase();
      const computer = computerSelection.toLowerCase();

      if (player === computer) {
        return "It's a draw!";
      } else if (player == "rock" && computer == "scissors") {
        playerScore += 1;
        return "You win! Rock beats Scissors";
      } else if (player == "scissors" && computer == "rock") {
        computerScore += 1;
        return "Computer win! Rock beats Scissors";
      } else if (player == "paper" && computer == "rock") {
        playerScore += 1;
        return "You win! Paper beats Rock";
      } else if (player == "rock" && computer == "paper") {
        computerScore += 1;
        return "Computer win! Paper beats Rock";
      } else if (player == "scissors" && computer == "paper") {
        playerScore += 1;
        return "You win! Scissors beat Paper";
      } else if (player == "paper" && computer == "scissors") {
        computerScore += 1;
        return "Computer win! Scissors beat Paper";
      }
    }

    //Prompts user to choose R,P,S
    const playerSelection = prompt("rock, paper, or scissors?");
    //Computer makes a random selection between R,P,S
    const computerSelection = getComputerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
};

game();

//log final score
console.log(`You: ${playerScore}`);
console.log(`Comp: ${computerScore}`);
