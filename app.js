let playerScore = 0;
let computerScore = 0;

let player_Score = document.getElementById("playerScore");
let computer_Score = document.getElementById("computerScore");
let winner = document.getElementById("winner");
let restart = document.getElementById("restart");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// restarts game
restart.addEventListener("click", () => {
  updateScores();
});
// computer choices
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoices = choices[Math.floor(Math.random() * choices.length)];
  return randomChoices;
}
// player choices
function getPlayerChoice() {
  rock.addEventListener("click", () => {
    playRound("rock");
  });
  paper.addEventListener("click", () => {
    playRound("paper");
  });
  scissors.addEventListener("click", () => {
    playRound("scissors");
  });
}
getPlayerChoice();

// Update the scores
function updateScores() {
  computerScore = 0;
  playerScore = 0;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
updateScores();

function addPlayerWin() {
  //update player score
  playerScore++;
  player_Score.textContent = playerScore;
  //logging score
  console.log(`You Win! 🥳 You: ${playerScore} - Computer: ${computerScore} `);
}
function addCompWin() {
  //update computer score
  computerScore++;
  computer_Score.textContent = computerScore;
  //logging score
  console.log(
    `You're Lose! 🤖 You: ${playerScore} - Computer: ${computerScore}`
  );
}
function addDraw() {
  //no update to score... only logging score
  console.log(
    `It's a Draw!! 📝 You: ${playerScore} - Computer: ${computerScore}`
  );
}
// function determines winner each round
//prints results to screen
function playRound(playerSelection) {
  const computer = getComputerChoice();
  const player = playerSelection;
  if (player === computer) {
    addDraw();
    winner.textContent = "📝 It's a draw!! 🫣";
  } else if (player == "rock" && computer == "scissors") {
    addPlayerWin();
    winner.textContent = "🎉 You win!! Rock beats Scissors 🥳";
  } else if (player == "scissors" && computer == "rock") {
    addCompWin();
    winner.textContent = "🦾 Computer win!! Rocks beat Scissors 🤖";
  } else if (player == "paper" && computer == "rock") {
    addPlayerWin();
    winner.textContent = "🎉 You win!! Paper beats Rock 🥳";
  } else if (player == "rock" && computer == "paper") {
    addCompWin();
    winner.textContent = "🦾 Computer win!! Paper beats Rock 🤖";
  } else if (player == "scissors" && computer == "paper") {
    addPlayerWin();
    winner.textContent = "🎉 You win!! Scissors beat Paper 🥳";
  } else if (player == "paper" && computer == "scissors") {
    addCompWin();
    winner.textContent = "🦾 Computer win!! Scissors beat Paper 🤖";
  }
  // function ends game once first score reach 10
  function gamePlay() {
    if (playerScore >= 5 || computerScore >= 5) {
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
      winner.textContent = `Game Over!!! Player: ${playerScore} -vs- Computer: ${computerScore}`;
      console.log(
        `Game Over!!! Player: ${playerScore} -vs- Computer: ${computerScore}`
      );
      setTimeout(function () {
        winner.textContent = "Let's Play.. Click Start!! ";
      }, 5000);
    }
  }
  gamePlay();
}
playRound();
