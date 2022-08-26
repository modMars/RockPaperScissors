function getComputerChoice() {
  let cpuChoice;
  let cpuRand = Math.floor(Math.random() * (4 - 1) + 1);
  if (cpuRand === 3) cpuChoice = 'Scissors!';
  else if (cpuRand === 2) cpuChoice = 'Rock!';
  else if (cpuRand === 1) cpuChoice = 'Paper!';
  return cpuChoice;
}
console.log(getComputerChoice());
