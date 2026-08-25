function getComputerChoice(){
    let randomNumber = Math.random();
    let choice;
    if (randomNumber<=1/3){
        choice="rock";
        return choice;
    }
    else if (randomNumber<=2/3){
        choice="scissors";
        return choice;
    }
    else {
        choice="paper";
        return choice;
    }
}

function getHumanChoice(){
    let userInput=prompt("Choose between - Rock , Paper , Scissors : ");
    let humanChoice=userInput.toLowerCase();
    return humanChoice;
}

function playRound(){
    let computerChoice=getComputerChoice();
    let humanChoice=getHumanChoice();
    let whoWon;
    
    if (computerChoice === humanChoice){
        alert("Computer Chose: "+ computerChoice+ " and Human Chose: "+ humanChoice + " so it is a "+ "DRAW");
        whoWon="DRAW";
        return whoWon;
    }

    else if ((computerChoice==="rock" && humanChoice==="scissors") || (computerChoice==="paper" && humanChoice==="rock") || (computerChoice==="scissors" && humanChoice==="paper")){
        alert("Computer Chose: "+ computerChoice+ " and Human Chose: "+ humanChoice + ": so COMPUTER WON");
        whoWon="computer";
        return whoWon;
    }

    else if ((computerChoice==="scissors" && humanChoice==="rock") || (computerChoice==="rock" && humanChoice==="paper") || (computerChoice==="paper" && humanChoice==="scissors")){
        alert("Computer Chose: "+ computerChoice+ " and Human Chose: "+ humanChoice + ": so HUMAN WON");
        whoWon="human";
        return whoWon;
    }
}

let rounds=prompt("How many rounds do you want to play: ")
let humanScore=0;
let computerScore=0;
for (let i=1; i<=rounds; i++){
    let result=playRound();
    if (result==="computer"){
        computerScore++;
    }
    else if (result==="human"){
        humanScore++;
    }
    else if (result==="DRAW"){
        console.log("No one won, IT WAS A DRAW");
    }
}

console.log("HUMAN SCORE : " + humanScore + '\n' + "and COMPUTER SCORE : " + computerScore);
if (humanScore===computerScore){
    alert("This game was a draw");
}
else if (humanScore > computerScore){
    alert("Human is the WINNER !!!");
}
else{
    alert("Computer is the WINNER !!!");
}

