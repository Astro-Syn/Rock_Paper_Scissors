const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";
    console.log(computerChoice)

    if(playerChoice === computerChoice){
        result = 'Tie Game!'
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === 'scissors') ? 'You WIN!' : "You Lose. Sorry!"
                break;
            case 'paper':
            result = (computerChoice === 'rock') ? 'You WIN!' : "You Lose. Sorry!"
            case 'scissors':
            result = (computerChoice === 'paper') ? 'You WIN!' : "You Lose. Sorry!"
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText')

    switch(result){
        case 'You WIN!':
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'You Lose. Sorry!':
            resultDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}