////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
// commit 1 created file
// commit 2
// unit 3.6 getPlayerMove() & getComputerMove() 1st chg

function getPlayerMove(move) {
    // unit 3.6 getPlayerMove() & getComputerMove() 1st chg
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (typeof(move) === "undefined" || typeof(move) === null) {
        getInput();
    }
    else {
        move = "rock";
        return move;
    }

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   if (typeof(move) === "undefined" || typeof(move) === null) {
        move = randomPlay();
        return move;
    }
    else {
        return move;
    }    
}


// commit 3
// Unit 4 getWinner() if cases for winner

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
   if (playerMove === computerMove){
        winner = "tie";
    }
    else if (playerMove === "rock"){
        if (computerMove === "paper") {
            winner = "computer";
        }
        else {
            winner = "player";
        }   
    }
    else if (playerMove === "paper"){
        if (computerMove === "rock") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    else if (playerMove === "scissors"){
         if (computerMove === "paper") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
    }
    return winner;
}

function playToFive() {

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


    console.log("Let's play Rock, Paper, Scissors" + "\n");

    var playerWins = 0;
    var computerWins = 0;

    var playerMove;
    var computerMove;
    var winner;

    while (playerWins<5 && computerWins<5) {
 
        playerMove=getComputerMove();
        computerMove=getComputerMove();
                    
        winner = getWinner(playerMove,computerMove);

        if (winner === "player") {
            playerWins++;
        }
        if (winner === "computer") {
            computerWins++;
        }

        console.log("Player:: " + playerMove + " /" + " Computer:: " + computerMove);
        console.log("Round Winner " + winner);
        console.log("Player:: " + playerWins + " /" + " Computer:: " + computerWins + "\n");
 
     }

     if (playerWins > computerWins) {
        console.log("WINNER: PLAYER");
     }
     else {
        console.log("WINNER: COMPUTER");
     }

     return [playerWins, computerWins];

}

playToFive();

