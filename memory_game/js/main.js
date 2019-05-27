// array to store the cards
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Not a match! Try again")
            }
    }

function flipCard (cardId) { 
    checkForMatch();
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push[cards[cardId]];
    
}

flipCard(0);
flipCard(2);