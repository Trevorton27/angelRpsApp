const computer = document.getElementById('computer');
const user = document.getElementById('user');
const result = document.getElementById('result');
const comScore = document.getElementById('computerScore');
const pOneScore = document.getElementById('playerScore');

const paper = document.getElementById('paperButton');
paper.addEventListener('click', () => comparison('paper'));
const scissors = document.getElementById('scissorsButton');
scissors.addEventListener('click', () => comparison('scissors'));
const rock = document.getElementById('rockButton');
rock.addEventListener('click', () => comparison('rock'));

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

alert('Click on an image to play against the computer. Ready, Set, SHOOT!!!');

function getComputerChoice() {
  const choices = ['paper', 'scissors', 'rock'];
  const computerPickGenerator =
    choices[Math.floor(Math.random() * choices.length)];
  return computerPickGenerator;
}

function comparison(userChoice) {
  const computerChoice = getComputerChoice();
  switch (computerChoice + userChoice) {
    case 'paperscissors':
    case 'rockpaper':
    case 'scissorsrock':
      computer.textContent = 'The computer chose ' + computerChoice;
      user.textContent = 'You chose ' + userChoice;
      result.textContent = 'You Win';
      userScore++;
      pOneScore.textContent = 'Player score  ' + userScore;
      return 'You Win';
    case 'scissorspaper':
    case 'paperrock':
    case 'rockscissors':
      computer.textContent = 'The computer chose ' + computerChoice;
      user.textContent = 'You chose ' + userChoice;
      result.textContent = 'You Lose';
      computerScore++;
      comScore.textContent = 'Computer score  ' + computerScore;
      return 'You Lose';
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
      computer.textContent = 'The computer chose ' + computerChoice;
      user.textContent = 'You chose ' + userChoice;
      result.textContent = 'Draw';
      return 'Draw';
  }
}
