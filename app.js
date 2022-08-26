function getComputerChoice() {
  let cpuChoice;
  let cpuRand = Math.floor(Math.random() * (4 - 1) + 1);
  if (cpuRand === 3) cpuChoice = 'scissors';
  else if (cpuRand === 2) cpuChoice = 'rock';
  else if (cpuRand === 1) cpuChoice = 'paper';
  return cpuChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock' && computerSelection === 'paper')
    return 'You lose! paper beats rock!';
  else if (playerSelection === 'scissors' && computerSelection === 'rock')
    return 'You lose! rock beats scissors!';
  else if (playerSelection === 'paper' && computerSelection === 'scissors')
    return 'You lose! scissors beats paper!';
  else if (playerSelection === computerSelection) return "It's a tie!";
  else return `You've won! ${playerSelection} beats ${computerSelection}`;
}

function game() {
  for (let i = 0; i <= 5; i++) {
    let US = prompt(
      'Please write one of the 3 options: Rock!, Paper!, Scissors!'
    );
    console.log(playRound(US, getComputerChoice()));
  }
}

game();
