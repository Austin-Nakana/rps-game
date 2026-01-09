//choice enum
const choice = {
    ROCK: "Rock",
    PAPER: "Paper",
    SCISSORS: "Scissors"
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
    
