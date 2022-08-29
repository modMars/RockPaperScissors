  let cpuCounter = 0;
  let playerCounter = 0;;

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
    return 'You lose! paper beats rock!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock')
  {
    cpuCounter++;
    return 'You lose! rock beats scissors!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors')
  {
    cpuCounter++;
    return 'You lose! scissors beats paper!';
  }
  else if (playerSelection === computerSelection) return "It's a tie!";
  else 
  {
    playerCounter++;
    return `You've won! ${playerSelection} beats ${computerSelection}`;
  }
}

// function game() {
//   for (let i = 0; i <= 5; i++) {
//     let US = prompt(
//       'Please write one of the 3 options: Rock!, Paper!, Scissors!'
//     );
//     console.log(playRound(US, getComputerChoice()));
//   }
// }

const btnRock = document.querySelector('.rck');
const btnPaper = document.querySelector('.ppr');
const btnScissors = document.querySelector('.scs');
const container = document.querySelector('.container');
const score = document.createElement('div');

btnRock.addEventListener('click', () => {
  score.textContent = (playRound('rock', getComputerChoice()))
  console.log(score.textContent)
  console.log(playerCounter, cpuCounter)
  container.append(score.textContent);
  setTimeout(score.textContent = "", 1000)
  container.append(score.textContent)
}
  
)
btnPaper.addEventListener('click', () => {
  console.log(playRound('paper', getComputerChoice()))}
  )

btnScissors.addEventListener('click', () => {
  console.log(playRound('scissors', getComputerChoice()))
}
)

