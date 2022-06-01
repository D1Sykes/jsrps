function computerPlay() {
    const number = (Math.random() * 3);
    if (number <= 1) {
        return "Rock";
    } else if (number >= 2) {
        return "Scissors";
    }
    else return "Paper";
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelect, computerSelect) {
    if (playerSelect == "rock" && computerSelect == "scissors") {
        playerScore++;
    return `You win! Rock beats Scissors! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "paper" && computerSelect == "rock") {
      playerScore++;
    return `You win! Paper beats Rock! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "scissors" && computerSelect == "paper") {
      playerScore++;
    return `You win! Scissors beats Paper! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "rock" && computerSelect == "paper") {
      computerScore++;
    return `You lose! Paper beats Rock! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "paper" && computerSelect == "scissors") {
      computerScore++;
    return `You lose! Scissors beats Paper! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "scissors" && computerSelect == "rock") {
      computerScore++;
    return `You lose! Rock beats Scissors! The score is: ${playerScore} to ${computerScore}`
  }
  else return `That's a draw, try again! The score is: ${playerScore} to ${computerScore}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelect = prompt("Type: Rock, Paper or Scissors")
        playerSelect = playerSelect.toLowerCase();
        const computerSelect = computerPlay()
        console.log(playRound(playerSelect, computerSelect))
  }
  if (playerScore > computerScore) {
      console.log(`You win! Final score: ${playerScore} to ${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`You lose! Final score: ${playerScore} to ${computerScore}`);
  } else
      console.log(`You tied! Final score: ${playerScore} to ${computerScore}`);
}

game();