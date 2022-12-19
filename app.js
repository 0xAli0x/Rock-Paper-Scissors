//Pick out the elements to be used.
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
// Grab the buttons.
let userChoice
let computerChoice
let result

let scoreUser = 0;
let scoreComputer = 0;
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
function userWins() {scoreUser += 1; 
}

function computerWins() {
    scoreComputer += 1;
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
 }))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber);


if (randomNumber === 1) {
    computerChoice = 'Rock'
}
if (randomNumber === 2) {
    computerChoice = 'Scissors'
}
if (randomNumber === 3) {
    computerChoice = 'Paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
if (computerChoice === userChoice) {
    result = 'Draw!'
}
if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    result = 'Computer Wins!'
}
if (computerChoice === 'Rock' && userChoice === 'Paper') {
    result = 'You Win!'
}

if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    result = 'You Win!'
}
if (computerChoice === 'Paper' && userChoice === 'Rock') {
    result = 'Computer Wins!'
}
if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    result = 'You Win!'
}
if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    result = 'Computer Wins!'
}
resultDisplay.innerHTML = result
if (result === "You Win!") {
    userWins();
} else if (result === "Computer Wins!") {
    computerWins();
}
console.log('Score - User: ' + scoreUser + ' Computer: ' + scoreComputer); 
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
userScoreElement.innerHTML = 'Your score: ' + scoreUser;
computerScoreElement.innerHTML = 'Computer Score: ' + scoreComputer;
}

function getScores(computerScore, userScore) {
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("user-score").innerHTML = userScore;
}
getScores(computerScore, userScore);



