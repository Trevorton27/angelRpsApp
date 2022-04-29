
const paper = document.getElementById("paperButton");
paper.addEventListener("click", ()=> comparison("paper"));
const scissors = document.getElementById("scissorsButton");
scissors.addEventListener("click", ()=> comparison("scissors"));
const rock = document.getElementById("rockButton");
rock.addEventListener("click", ()=> comparison("rock"));
const computer = document.getElementById("computer");
const user = document.getElementById("user");
const result = document.getElementById("result");
const huusPoint = document.getElementById("score")

function getComputerChoice () {
    const arr = ["paper", "scissors", "rock"];    
    const computerPickGenerator = arr[Math.floor(Math.random() * arr.length)];
    return computerPickGenerator;
}
// const userPoint= "Computer Loses";
// const computerPoint= "Computer Wins";

// for (let i=0; i<2000; i++) {    
//     let computerPick = getComputerChoice();
//     let playerOne = playerPick();
//     let gameResult = comparison(playerOne,computerPick);
//     endGame(gameResult);
//     console.log(gameResult);
//     console.log(computerPick);
//     if (userScore === 5 || computerScore ===5) {
//         break;
//     }
// }



function comparison (userChoice) {
    const computerChoice = getComputerChoice();
    switch(computerChoice + userChoice) {
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            computer.textContent = "The computer chose " + computerChoice;
            user.textContent = "You chose " + userChoice;
            console.log("computerChoice:", computerChoice);
            console.log("userChoice:", userChoice);
            console.log("Computer Loses");
            result.textContent = ("Computer Loses");
            return("Computer Loses");
    
    }
    switch(computerChoice + userChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            computer.textContent = "The computer chose " + computerChoice;
            user.textContent = "You chose " + userChoice;
            console.log("computerChoice:", computerChoice);
            console.log("userChoice:", userChoice);
            console.log("Computer Wins");
            result.textContent = ("Computer Wins");
            return("Computer Wins");
    }
    switch(computerChoice + userChoice) {
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            computer.textContent = "The computer chose " + computerChoice;
            user.textContent = "You chose " + userChoice;
            console.log("computerChoice:", computerChoice);
            console.log("userChoice:", userChoice);
            console.log("Draw");
            result.textContent = ("Draw");
            return("Draw");
    }
}

function getScore () {
    const userWins= "Computer Loses";
    const computerWins= "Computer Wins";
    const bothWin= "Draw";
    let computerScore = 0;
    let userScore = 0;
    let drawScore = 0;
    let final = comparison ();
    if(final == bothWin) {
        drawScore+=1;
        return drawScore;
    }
    else if (final == userWins) {
        userScore+=1;
        return userScore;
        // document.getElementById("playerScore").innerHTML = userScore;
    }
    else if (final == computerWins) {
        computerScore+=1;
        return computerScore;
    }


    
}
// var showMeTheMoney = getScore();
document.getElementById("playerScore").innerHTML = getScore();

// var showMeTheMoney = getScore();
// document.getElementById("huusPoint").innerHTML = showMeTheMoney ;


// let endGame = compareChoices();
// console.log(endGame);
// result.textContent = endGame;

// function result (pick){
// const showWinner = compareChoices (userChoice);
// console.log("winner", showWinner);
// result.textContent = "winner " + showWinner;
// alert("winner " + showWinner);
// }

// The Game Logic

// paper beats rock
// paper cancels paper
// scissors beats paper
// scissors cancels scissors
// rock beats scissors
// rock cancels rock

// 3 things to click on (i.e buttons) -done
// display what the computer has chosen adn whether the player won or lost
    // a) we need a javascript variablr to store the computers pick - done
    // b) we need a javascript varuiable to store whether the player won or lost- done
    // c) html element to display computers pick -DONE
    // d) html element to display whether player won or lost -KIND OF
//So player can play as much as they want
    // option A) inifinite loop and dont show anything. just keep allowing player to choose Rock,paper,Sciss
    // option B) SHow a popup screen that asks the player if they wanna play again
// we need to keep track of both wins and loses
    // a) we need a javasctript variable for wins-TODO
    // b) we need a javasctript variable for loses-TODO
    // c) html element to display computers wins-TODO
    // d) html element to display computers loses-TODO

    // var call = compareChoices(userChoice);

// let endGame = finalScore(call);
// document.write(endGame);

// console.log(userScore);
// function finalScore(call) {
// var computerScore = 0;    
// var userScore = 0;
// var call = compareChoices();
// if (call == "Computer Loses") {
//     userScore += 1;
// }
// else if (call == "Computer Wins") {
//     computerScore += 1;
// }
// else if (call == "Draw") {
//     userScore +=0;
// }
// return computerScore;

// }
// var psr = endGame();
// var computerScore = 0;
// function endGame (gameResult){
// if (gameResult === userPoint){
//     userScore++;
// } else if (gameResult === computerPoint) {
//     computerScore++;
// }

// if (userScore === 5) {
//     console.log(userPoint);
//     return;
// }
// if (computerScore === 5) {
//     console.log(computerPoint);
//     return;
// }

// }
