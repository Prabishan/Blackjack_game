
document.getElementById("hit-btn").addEventListener('click', bjHit);

function bjHit() {
    let cardImg = document.createElement('img');
    cardImg.src = './images/10.png'
    cardImg.setAttribute('class','cardSize');
    document.querySelector('.player-area').appendChild(cardImg);
    
}