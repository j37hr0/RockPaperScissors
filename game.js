let playerScore = 0
let computerScore = 0
const computerSelection = getComputerChoice()
let playerSelection 

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
    console.log("win")
    }
    else if (player === "rock" && computer === "paper"){
    let lose = 0;
    return lose
    }
    else if (player === "scissors" && computer === "paper") {
        let win = 1;
        return win
    }
    else if (player === "scissors" && computer === "rock") {
        let lose = 0;
        return lose
    }
    else if (player === "paper" && computer === "rock") {
        let win = 1;
        return win
    }
    else if (player === "paper" && computer === "scissors") {
        let lose = 0;
        return lose
    }
    
}

function game(choice) {
    if (playerScore == 5){
        window.alert('You win the game!!')
    }
    else if (computerScore == 5){
        window.alert('You lose the game!!')
    }
    let outcome = playRound(choice, getComputerChoice())
    if (outcome === 0) {
        computerScore = computerScore + 1
        para.textContent = "You lose!"
    }
    else if (outcome === 1) {
        playerScore = playerScore + 1
        para.textContent = "You win!"
    }
    else if (outcome === 2) {
        para.textContent = "It's a tie"
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
display.appendChild(scoreP)
display.appendChild(scoreC)
display.appendChild(para)