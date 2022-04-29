const paper = document.getElementById("paperButton");
paper.addEventListener("click", () => comparison("paper"));
const scissors = document.getElementById("scissorsButton");
scissors.addEventListener("click", () => comparison("scissors"));
const rock = document.getElementById("rockButton");
rock.addEventListener("click", () => comparison("rock"));
const computer = document.getElementById("computer");
const user = document.getElementById("user");
const result = document.getElementById("result");
const comScore = document.getElementById("computerScore");
const pOneScore = document.getElementById("playerScore");
var userScore = 0;
var computerScore = 0;
var drawScore = 0;
alert("Ready, Set, SHOOT!!!")
function getComputerChoice() {
  const arr = ["paper", "scissors", "rock"];
  const computerPickGenerator = arr[Math.floor(Math.random() * arr.length)];
  return computerPickGenerator;
}
function comparison(userChoice) {
  const computerChoice = getComputerChoice();
  switch (computerChoice + userChoice) {
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      computer.textContent = "The computer chose " + computerChoice;
      user.textContent = "You chose " + userChoice;
      result.textContent = "You Win";
      userScore += 1;
      pOneScore.textContent = "Player score  " + userScore;
      return "You Win";
  }
  switch (computerChoice + userChoice) {
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      computer.textContent = "The computer chose " + computerChoice;
      user.textContent = "You chose " + userChoice;
      result.textContent = "You Lose";
      computerScore += 1;
      comScore.textContent = "Computer score  " + computerScore;
      return "You Lose";
  }
  switch (computerChoice + userChoice) {
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      computer.textContent = "The computer chose " + computerChoice;
      user.textContent = "You chose " + userChoice;
      result.textContent = "Draw";
      return "Draw";
  }
}
