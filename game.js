//TODO create a function to clear the game after it reaches 5


let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
let playerSelection;


function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1
    if (num == 1) {
        return "rock"
    }
    else if (num === 2) {
        return "paper"
    }
    else if (num === 3) {
        return "scissors"
    }
}

// function getPlayerChoice() {
//     let playerSelection;
//     if 
//     return playerSelection
// }

function playRound(player, computer) {
    if (player === computer) {
        let tie = 2;
        return tie
    }
    else if (player === "rock" && computer === "scissors"){
    let win = 1;
    return win
    }
    else if (player === "rock" && computer === "paper"){
    let lose = 0;
    return lose
    }
    else if (player === "scissors" && computer === "paper") {
        let win = 3;
        return win
    }
    else if (player === "scissors" && computer === "rock") {
        let lose = 4;
        return lose
    }
    else if (player === "paper" && computer === "rock") {
        let win = 5;
        return win
    }
    else if (player === "paper" && computer === "scissors") {
        let lose = 6;
        return lose
    }
    
}

function game(choice) {
    if (playerScore == 5){
        window.alert('You win the game!!')
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5){
        window.alert('You lose the game!!')
        playerScore = 0;
        computerScore = 0;
    }
    let outcome = playRound(choice, getComputerChoice())
    if (outcome === 0) {
        computerScore = computerScore + 1
        para.textContent = "You chose rock, the computer chose paper! You lose!"
    }
    else if (outcome === 1) {
        playerScore = playerScore + 1
        para.textContent = "You chose rock, the computer chose scissors! You win!"
    }
    else if (outcome === 2) {
        para.textContent = "It's a tie!"
    }
    else if (outcome === 3) {
        playerScore = playerScore + 1
        para.textContent = "You chose scissors, the computer chose paper! You win!"
    }
    else if (outcome === 4) {
        playerScore = playerScore + 1
        para.textContent = "You chose scissors, the computer chose rock! You lose!"
    }
    else if (outcome === 5) {
        playerScore = playerScore + 1
        para.textContent = "You chose paper, the computer chose rock! You win!"
    }
    else if (outcome === 6) {
        playerScore = playerScore + 1
        para.textContent = "You chose paper, the computer chose scissors! You lose!"
    }
}

const body = document.querySelector('.main')
const allButtons = document.querySelectorAll('.btn')

allButtons.forEach((button)=>{button.addEventListener('click',()=>{
    playerSelection = button.id;
    console.log(playerSelection)
    game(playerSelection)
    scoreC.textContent = `Computer: ${computerScore}`
    scoreP.textContent = `Player: ${playerScore}`
})})

const display = document.querySelector('.display')
const para = document.createElement('p')
const scoreP = document.createElement('p')
const scoreC = document.createElement('p')
scoreP.setAttribute("style", "font-size:30px")
scoreP.textContent = "Player: 0";
scoreC.textContent = "Computer: 0";
scoreC.setAttribute("style", "font-size:30px")
para.setAttribute("style", "font-size:60px;font-weight:bold;")
display.appendChild(scoreP)
display.appendChild(scoreC)
display.appendChild(para)