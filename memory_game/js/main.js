// array to store the cards
var cards = [
    {
        rank:"queen",
        suit:"hearts" ,
        cardImage: "images/queen-of-hearts.png"
    },

    {
        rank:"queen",
        suit:"diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },

    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"

    },

    {
        rank:"king",
        suit:"diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function checkForMatch() {
    cards.cardImage.setAttribute('src', this.cardImage);    
    if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Not a match! Try again")
            }
    }

function flipCard () { 
    var cardId = this.getAttribute('data-id');
    checkForMatch();
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push[cards[cardId].rank];
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    
}

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', 'i');
        cardElement.addEventListener('click', flipCard());
        cardElement.appendChild(document.getElementById('game-board'));
    }
    
}

createBoard();