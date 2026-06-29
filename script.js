function getComputerChoice (){
    const randomNumber = Math.random();
    let computerChoice = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
        computerChoice = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt();
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;
    
function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == 'rock'){
        if (computerChoice == 'rock'){
            console.log ("You tie");
        } else if (computerChoice == 'paper'){
            console.log("You lose!")
            computerScore++;
        } else{
            console.log ("You win!")
            humanScore++;
        }
    }
    if (humanChoice == 'paper'){
        if (computerChoice == 'rock'){
            console.log ("You win");
            humanScore++;
        } else if (computerChoice == 'paper'){
            console.log("You tie!")
        } else {
            console.log ("You lose!")
            computerScore++;
            
        }
    }
    if (humanChoice == 'scissors'){
        if (computerChoice == 'rock'){

            console.log("You lose!")
            computerScore++;
            
        } else if (computerChoice == 'paper'){
            console.log ("You win!")
            humanScore++;
        } else{
        
            console.log ("Tie");
        }
    }
}




function playGame(){

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore>computerScore){
        console.log("You FINALLY WIN!");
    } else if (humanScore == computerScore){
        console.log ("You FINALLY DRAW!");
    } else {
        console.log ("YOU FINALLY LOSE!");
    }
}
playGame();