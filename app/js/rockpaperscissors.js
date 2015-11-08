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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    var move = getInput;
    if (move === "rock") {
        return console.log("Player plays" + "rock"); 

    } else if (move === "paper") {
        return console.log("Player plays" + "paper"); 
    } else if (move === "scissors") {
        return console.log("Player plays" + "scissors"); 
    }

    return var move || getInput; 
    move = move || getInput(); 

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     var move = randomNumber;  

    if (move < 0.33) {
        return "rock";
    } else if (move < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
    return var move || randomPlay; 
    move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var playerMove = 'scissors';
var computerMove = 'scissors';
var rock;
var scissors;
var paper;
var winner;
var result;

if ((playerMove === 'rock') && (computerMove === 'scissors')) {
    result = 'Player Wins!';
    console.log(result);
} else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
    result = 'Computer Wins!';
    console.log(result);
} else if ((playerMove === 'paper') && (computerMove === 'rock')) {
    result = 'Player Wins!';
    console.log(result);
} else if ((playerMove === 'rock') && (computerMove === 'paper')) {
    result = 'Computer Wins!'; 
    console.log(result);
} else if ((playerMove === 'rock') && (computerMove === 'rock')) {
    result = 'Tie game, play again!'; 
    console.log(result);
} else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
    result = 'Player Wins!';
    console.log(result); 
} else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
    result = 'Computer Wins!';
    console.log(result); 
} else if ((playerMove === 'scissors') && (computerMove === 'scissors')) {
    result = 'Tie game, play again!'; 
    console.log(result);
} else if ((playerMove === 'paper') && (computerMove === 'paper')) {
    result = 'Tie game, play again!'; 
    console.log(result);
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

function playToFive(5) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var PlayerMove = rock ; 
    var ComputerMove = scissors ;
    var rock;
    var scissors;
    var paper;
    var winner;
    var result;

    while ((playerWins < 5) && (computerWins < 5)) {
        
        var PlayerMove = getPlayerMove(getInput());
        console.log('Player plays' + PlayerMove + 'Computer plays' + ComputerMove); 
        
        var ComputerMove = getComputerMove(randomPlay());
        console.log('Computer plays' + ComputerMove + 'Player plays' + PlayerMove);
        
        var result = getWinner(PlayerMove, ComputerMove);
        console.log('The Winner is' + result);
        
        if (result === 'player') {
            playerWins +=1;
            console.log('The Player Wins!' + 'Player plays' + PlayerMove + 'Computer plays' + ComputerMove);
        }
        
        else if (result === 'computer') {
            computerWins +=1;
            console.log('The Computer Wins!' + 'Computer plays' + ComputerMove + 'Player plays' + PlayerMove);
        }
        
        else if (result === 'tie') {
            console.log('It was a tie!' + 'Player plays' + PlayerMove + 'Computer plays' + Computer Move); 
        }
        
    }


} 
return [playerWins, computerWins]; 

    
    return [playerWins, computerWins];
}

