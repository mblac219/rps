let playerScore = 0;
let computerScore = 0;

//function for random computer play
function getComputerPlay() {
  const choices = ["r", "p", "s"];
  const randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}
console.log(getComputerPlay());
