
document.getElementById("hit-btn").addEventListener('click', bjHit);

document.getElementById('stand-btn').addEventListener('click', changePlayertoBot);

document.getElementById('deal-btn').addEventListener('click', deal);

const player = { 'you': '.player-area', 'bot': '.bot-area' }

let currPlayer = player['you'];
let playerScore = 0;
let botScore = 0;
let pScore = document.querySelector('.player-score');
let bScore = document.querySelector('.bot-score');

function deal() {
    let playerImg = document.querySelector('.player-area').querySelectorAll('img');
    let botImg = document.querySelector('.bot-area').querySelectorAll('img');


    for (i = 0; i < playerImg.length; i++) {
        playerImg[i].remove();
    }

    for (i = 0; i < botImg.length; i++) {
        botImg[i].remove();
    }
    currPlayer = player['you'];
    playerScore = 0;
    botScore = 0;
    pScore.textContent = playerScore;
    bScore.textContent = botScore;

}

function changePlayertoBot() {
    currPlayer = player['bot'];
    botScore += cardGen(currPlayer);
    bScore.textContent = botScore;
    if (botScore > 21) {
        bScore.textContent = "BUST!!!"
    } else if (bScore === 21) {
        alert('You LOSE')
    }
}
function cardGen(playerClass) {

    let cardImg = document.createElement('img');
    let randNum = randomNumGenerator();
    cardImg.src = `./images/${randNum}.png`
    cardImg.setAttribute('class', 'cardSize');
    document.querySelector(playerClass).appendChild(cardImg);
    console.log(randNum);
    return randNum;
}

function bjHit() {
    currPlayer = player['you'];
    playerScore += cardGen(currPlayer);
    pScore.textContent = playerScore;
    if (playerScore > 21) {
        pScore.textContent = "BUST!!!"
    } else if (playerScore === 21) {
        alert('You Winn!!');
    }
}

function randomNumGenerator() {
    let rand = Math.floor(Math.random() * 13 + 1);
    return rand;
}