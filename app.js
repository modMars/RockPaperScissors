let cpuCounter = 0;
let playerCounter = 0;
const btnRock = document.querySelector('.rck');
const btnPaper = document.querySelector('.ppr');
const btnScissors = document.querySelector('.scs');
const container = document.querySelector('.container');
const score = document.createElement('div');
const h1 = document.getElementById('h1');
const player = document.getElementById('player')
const cpu = document.getElementById('cpu')

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
  {
    cpuCounter++;
    cpu.textContent = `CPU: ${cpuCounter}`
    if(cpuCounter === 5)
    return h1.textContent = "The machine won! better luck next time";
    return 'You lose! paper beats rock!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock')
  {
    cpuCounter++;
    cpu.textContent = `CPU: ${cpuCounter}`
    if(cpuCounter === 5)
    return h1.textContent = "The machine won the set! better luck next time";
    return 'You lose! rock beats scissors!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors')
  {
    cpuCounter++;
    cpu.textContent = `CPU: ${cpuCounter}`
    if(cpuCounter === 5)
      return h1.textContent = "The machine won! better luck next time";

    return 'You lose! scissors beats paper!';
  }
  else if (playerSelection === computerSelection) return `It's a tie! ${playerSelection} vs ${computerSelection}`;
  else 
  {
    playerCounter++;
    player.textContent = `Player: ${playerCounter}`
    if(playerCounter === 5)
    return h1.textContent = "You've won the set!";
    return `You've won! ${playerSelection} beats ${computerSelection}`;
  }
}

btnRock.addEventListener('click', () => {
  score.textContent = (playRound('rock', getComputerChoice()))
  h1.textContent = score.textContent;
  }
)

btnPaper.addEventListener('click', () => {
  score.textContent = (playRound('paper', getComputerChoice()))
  h1.textContent = score.textContent;
  }
)

btnScissors.addEventListener('click', () => {
  score.textContent = (playRound('scissors', getComputerChoice()))
  h1.textContent = score.textContent;
  }
)