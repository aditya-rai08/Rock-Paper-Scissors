
let choiceList=["Rock","Paper","Scissors"];
let currentChoice=0;
let rounds=Number(prompt("How many rounds do you want to play: "));
let humanScore=0;
let computerScore=0;

let previous=document.querySelector("#previous");
let next=document.querySelector("#next");
let done=document.querySelector("#done");
let userChoice=document.querySelector("#userChoice");
let compChoice=document.querySelector("#compChoice");        
let output=document.querySelector("#output");
let roundNO=document.querySelector("#roundNo");
let finalResult=document.querySelector("#finalResult");

previous.addEventListener("click", ()=>{
    if (currentChoice===0){
        currentChoice=choiceList.length-1;
    }
    else{
        currentChoice--;
    }
    userChoice.textContent=choiceList[currentChoice];

    
});

next.addEventListener("click", ()=>{
    if(currentChoice===2){
        currentChoice=0;
    }
    else{
        currentChoice++;
    }
    userChoice.textContent=choiceList[currentChoice];
});

function getComputerChoice(){
    let randomNumber = Math.random();
    let choice;
    if (randomNumber<=1/3){
        choice="Rock";
        return choice;
    }
    else if (randomNumber<=2/3){
        choice="Scissors";
        return choice;
    }
    else {
        choice="Paper";
        return choice;
    }
}

function playRound(human,computer){
    let whoWon;
        
    if (computer === human){
        whoWon="DRAW";
        return whoWon;
    }

    else if ((computer==="Rock" && human==="Scissors") || (computer==="Paper" && human==="Rock") || (computer==="Scissors" && human==="Paper")){
        whoWon="Computer";
        return whoWon;
    }

    else if ((computer==="Scissors" && human==="Rock") || (computer==="Rock" && human==="Paper") || (computer==="Paper" && human==="Scissors")){
        whoWon="Human";
        return whoWon;
    }
}

let currentRound=1

done.addEventListener("click", ()=>{
    
    roundNO.textContent=`Round: ${currentRound}`;
    if(currentRound>rounds){
        return;
    }
    
    let humanChoice;
    humanChoice=choiceList[currentChoice];
    let computerChoice=getComputerChoice();

    let result=playRound(humanChoice,computerChoice);

    output.textContent=`Output: ${result}`;
    compChoice.textContent=computerChoice;

    if(result==="Computer"){
    computerScore++;
    }
    else if(result==="Human"){
        humanScore++;
    }

    currentRound++

    if(currentRound>rounds){
        if(humanScore > computerScore){
            finalResult.textContent=`You Won the game , Your Score is ${humanScore}`;
         }   
        else if(computerScore > humanScore){
            finalResult.textContent=`Ohh, Computer Won the game ,You lost, Computer Score is ${computerScore}`;
        }
         else{
            finalResult.textContent="The Game was a draw";
        }   
    }
});









