function getComputerChoice() {
  const choices = ['S', 'W', 'G'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a draw!";
  }

  // Snake vs Water => Snake wins
  // Water vs Gun => Water wins
  // Gun vs Snake => Gun wins

  if (
    (user === 'S' && computer === 'W') ||
    (user === 'W' && computer === 'G') ||
    (user === 'G' && computer === 'S')
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function playGame() {
  do {
    let userInput = prompt("Enter S for Snake, W for Water, or G for Gun:").toUpperCase();
    
    if (!['S', 'W', 'G'].includes(userInput)) {
      alert("Invalid input! Please enter S, W, or G only.");
      continue;
    }

    let computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);
    
    let result = determineWinner(userInput, computerChoice);
    alert(result);
  } while (confirm("Do you want to play again?"));
}

playGame();
