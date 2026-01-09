//choice enum
const choice = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

//Random number generation with both bounds inclusive
function genRandomNum(lowerBound, upperBound){
    //handle float bounds 
    lowerBound = Math.ceil(lowerBound);
    upperBound = Math.floor(upperBound);
    
    let rangeSize = (upperBound - lowerBound) + 1; //+1 makes upperBound reachable(inclusive)
    
    //Math.floor() to remove decimals
    let randomNum = Math.floor(Math.random() * rangeSize) + lowerBound;// + lowerBound makes range start at lowerBound

    return randomNum; // lowerBound <= randomNum <= upperBound
}

function getComputerChoice(){

    let randNum = genRandomNum(1,3);

    switch(randNum){
        case 1:
            return choice.ROCK;
        case 2:
            return  choice.PAPER;
        case 3:
            return choice.SCISSORS;
    }
}

function getHumanChoice(){
    let choice = prompt("\nRock, Paper, Scizzors ?\n");

    return choice;
}
    
let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice){
        humanScore++;
        computerScore++;
        return "Draw! ";
    }else 
        if(humanChoice == choice.ROCK && computerChoice == choice.PAPER){
            computerScore++;
            return "You lose! Paper beats Rock ";
    }else 
        if(humanChoice == choice.ROCK && computerChoice == choice.SCISSORS){
            humanScore++;
            return "You win! Rock beats Scissors";
    }else 
        if(humanChoice == choice.PAPER && computerChoice == choice.ROCK){
            humanScore++;
            return "You win! Paper beats Rock";
    }else 
        if(humanChoice == choice.PAPER && computerChoice == choice.SCISSORS){
            computerScore++;
            return "You lose! Scissors beat Paper";
    }else 
        if(humanChoice == choice.SCISSORS && computerChoice == choice.ROCK){
            computerScore++;
            return "You lose! Rock beats Scissors";
    }else 
        if(humanChoice == choice.SCISSORS && computerChoice == choice.PAPER){
            humanScore++;
            return "You win! Scissors beat Paper";
    }
}
