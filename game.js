let playerScore;
let computerScore;
let playerSelection = prompt("Rock, paper, or scissors?").toLocaleLowerCase()
const computerSelection = getComputerChoice()

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

function playRound(player, computer) {
    if (player === computer) {
        tie = "It's a tie."
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
    let currentScore = playRound(playerSelection, computerSelection)
    if (currentScore === 0) {
        ++computerScore
    }
    else if (currentScore === 1) {
        ++playerScore
    }

}
