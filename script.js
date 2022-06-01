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
    if (playerSelect == "Rock" && computerSelect == "Scissors") {playerScore++;
    return `You win! Rock beats Scissors! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "Paper" && computerSelect == "Rock") {playerScore++;
    return `You win! Paper beats Rock! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "Scissors" && computerSelect == "Paper") {playerScore++;
    return `You win! Scissors beats Paper! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "Rock" && computerSelect == "Paper") {computerScore++;
    return `You lose! Paper beats Rock! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "Paper" && computerSelect == "Scissors") {computerScore++;
    return `You lose! Scissors beats Paper! The score is: ${playerScore} to ${computerScore}`
  } else if (playerSelect == "Scissors" && computerSelect == "Rock") {computerScore++;
    return `You lose! Rock beats Scissors! The score is: ${playerScore} to ${computerScore}`
  }
  else return `That's a draw, try again! The score is: ${playerScore} to ${computerScore}`
}