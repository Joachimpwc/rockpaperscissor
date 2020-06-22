function computerPlay() {
    let rpsNum = Math.floor(Math.random()*3)+1;
    let computerPlay;
    switch(rpsNum) {
    case(1):
      computerPlay = `rock`;
      break;
    case(2):
      computerPlay = `paper`;
      break;
    case(3):
      computerPlay = `scissor`;
      break;
    }
  return computerPlay;
  }
  
  function playerPlay() {
  let playerPick = prompt(`Pick rock, paper or scissor!`).toLowerCase();
      if (playerPick == `rock` || playerPick == `paper` || playerPick == `scissor`) {
        let playerPlay = playerPick;
        return playerPlay;
      } else {
        alert(`Rock, paper OR scissor, please learn to type`);
        return playerPlay();
      }
  }
        
  function playRound(playerSelection, computerSelection) {
    let playResult = playerSelection + computerSelection;
      switch(playResult) {
        case(`rockrock`):
        playResult = `Rock can't crush rock! The game is even!`;
        break;
        case(`paperpaper`):
        playResult = `Paper can't wrap paper! The game is even!`;
        break;
        case(`scissorscissor`):
        playResult = `Scissor can't cut scissor! The game is even!`;
        break;
        case(`rockpaper`):
        playResult = `Rock is enveloped by paper! You lose the round!`;
        break;
        case(`rockscissor`):
        playResult = `Rock ruins scissor! You win the round!`;
        break;
        case(`paperrock`):
        playResult = `Paper envelops rock! You win the round!`;
        break;
        case(`paperscissor`):
        playResult = `Paper is cut up by scissor! You lose the round!`;
        break;
        case(`scissorrock`):
        playResult = `Scissor is crushed by rock! You lose the round!`;
        break;
        case(`scissorpaper`):
        playResult = `Scissor cuts paper! You win the round!`;
        break;
      }
    return playResult;
  }
  
  function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
      return `Congratulations, you won over the computer! Now do it again!`
    } else if (computerScore > playerScore) {
      return `Too bad, you lost to a computer. Better luck next time!`
    } else {
      return `No winners. Try again.`
    }
  }
  
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    for (i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
            if (roundResult.search(`win`) > 0) {
            playerScore++;
            } else if (roundResult.search(`lose`) > 0) {
            computerScore++;  
            }
    }
    console.log(winner(playerScore, computerScore));
}