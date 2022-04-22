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


var PaperButton = document.getElementById("paperButton");
PaperButton.addEventListener("click", theFunction);
var ScissorsButton = document.getElementById("scissorsButton");
ScissorsButton.addEventListener("click", theFunction);
var RockButton = document.getElementById("rockButton");
RockButton.addEventListener("click", theFunction);
//I am using event.target.value to get value given to the button which is used to grab user pick
    function doSomething (event) {
        var pick = event.target.value;
        return (pick);
}
//The picks are going to run through these conditions until one of then is met. If one is met the result will return to theFunction.
function figureOutWhoWon (computerPickGenerator, userPick) {
    if (computerPickGenerator == "rock" && userPick == "scissors")
    return ("Computer Wins");
    else if (computerPickGenerator == "rock" && userPick == "paper")
    return ("Computer Loses");
    else if (computerPickGenerator == "paper" && userPick == "scissors")
    return ("Computer Loses");
    else if (computerPickGenerator == "paper" && userPick == "rock")
    return ("Computer Wins");
    else if (computerPickGenerator == "scissors" && userPick == "paper")
    return ("Computer Wins");
    else if (computerPickGenerator == "scissors" && userPick == "rock")
    return ("Computer Loses")
} 
function theFunction (event) {
    console.log(event.target.value);
    //Userpick is generated through a click event on buttons
    var user = document.getElementById('user');
    var userPick = doSomething (event);
    user.innerHTML = ("USER PICKED " + userPick);
    //Computer pick is triggered by click event but generated through math.random
    var computer = document.getElementById('computer');
    var arr = ["paper", "scissors", "rock"];    
    var computerPickGenerator = arr[Math.floor(Math.random() * arr.length)];
    computer.innerHTML = ("COMPUTER PICKED " + computerPickGenerator);
    //This is where the comparison determins who wins
    if (computerPickGenerator == userPick) {
        alert ("Tie")
    } else {
    //The function figureOutWhoWon finds out who won incase it is not a tie
    var result = figureOutWhoWon (computerPickGenerator, userPick);
    alert (result);
    } 
    console.log();
}




//element.addEventListener(event, function, useCapture)

//button.addEventListener("click", theFunction, ...)
