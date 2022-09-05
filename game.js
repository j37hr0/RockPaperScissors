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

function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper, or scissors?").toLocaleLowerCase()
    return playerSelection
}

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

function game() {
    let outcome = playRound(getPlayerChoice(), getComputerChoice())
    if (outcome === 0) {
        computerScore = computerScore + 1
        console.log("You lose")
    }
    else if (outcome === 1) {
        playerScore = playerScore + 1
        console.log("You win")
    }
    else if (outcome === 2) {
        console.log("It's a tie")
    }
}

for (let i = 0; i < 5; i++) {
    game()
    console.log(`player score: ${playerScore}`)
    console.log(`computer score: ${computerScore}`)
}