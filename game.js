//choice enum
const choice = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

//winsAgainst enum
const winsAgainst = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
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
    let input = prompt("\nRock, Paper, Scizzors ?\n");

    return input;
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
    }

    if (winsAgainst[humanChoice] === computerChoice) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }else{
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}


function playGame(){
    
    for(let i = 1; i <= rounds; i++){
        console.log(`Round: ${i}`);
        console.log(`Result: ${playRound(getHumanChoice(), getComputerChoice())}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Your score: ${humanScore}`);
        console.log("\n\n");
    }

    console.log(`You: ${humanScore} vs Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }else 
        if (humanScore < computerScore){
            console.log("Computer won the game!");
    }else{
        console.log("It's a draw!");
    }
}

playGame();