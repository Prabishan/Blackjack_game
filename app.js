
document.getElementById("hit-btn").addEventListener('click', bjHit);

document.getElementById('stand-btn').addEventListener('click', changePlayertoBot);

document.getElementById('deal-btn').addEventListener('click', deal);

const player = { 'you': '.player-area', 'bot': '.bot-area' }

let currPlayer = player['you'];
let playerScore = 0;
let botScore = 0;


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
}

function changePlayertoBot() {
    currPlayer = player['bot'];

}
function cardGen(playerClass) {

    let cardImg = document.createElement('img');
    let randNum = randomNumGenerator();
    cardImg.src = `./images/${randNum}.png`
    cardImg.setAttribute('class', 'cardSize');
    document.querySelector(playerClass).appendChild(cardImg);
    return randNum;
}

function bjHit() {

    let score = cardGen(currPlayer);
}

function randomNumGenerator() {
    let rand = Math.floor(Math.random() * 13 + 1);
    return rand;
}