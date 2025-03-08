document.getElementById("card").style.visibility="hidden"


//CREATE DECK
let deck = [];

const naipes = {
    clubs: "♣",    
    diamonds: "♦", 
    hearts: "♥",   
    spades: "♠",  
};

const values = [
    { value: 1, text: "A" },
    { value: 2, text: "2" },
    { value: 3, text: "3" },
    { value: 4, text: "4" },
    { value: 5, text: "5" },
    { value: 6, text: "6" },
    { value: 7, text: "7" },
    { value: 8, text: "8" },
    { value: 9, text: "9" },
    { value: 10, text: "10" },
    { value: 11, text: "J" },
    { value: 12, text: "Q" },
    { value: 13, text: "K" }
];


for (let naipe in naipes) {
    for (let valor of values) {
        deck.push({
            value: valor.value,
            text: valor.text,
            naipe: naipes[naipe]
        });
    }
}


//CREATE PLAY BUTTON
const button = document.createElement("button");
button.textContent = "Let's play"

button.addEventListener("click", createDecks);
button.addEventListener("click", showDeck);

document.body.appendChild(button);


//CREATE 2 DECKS OF 26 SHUFFLED CARDS
let array1 = [];
let array2 = [];

function createDecks () {
    for (let i=0; i<26; i++) {
        let randomNumber = Math.floor(Math.random() * 52)
        array1.push(deck[randomNumber]);
    
        let randomNumbers = Math.floor(Math.random() * 52)
        array2.push(deck[randomNumbers]);
    }
    console.log(array1)
    console.log(array2)
}


//REMOVE 2 CARDS FROM TOP
function drawCards () {
    let cardRemoved1 = array1.shift()
    console.log(cardRemoved1);
    if(cardRemoved1.value === 2) {

}
    let cardRemoved2 = array2.shift()
    console.log(cardRemoved2);


//COMPARE THE CARDS VALUE
    if(cardRemoved1.value > cardRemoved2.value) {
        console.log("Player 1 wins");
        array1.push(cardRemoved1);
        array1.push(cardRemoved2);

        console.log(array1)
    } else {
        console.log ("Player 2 wins");
        array2.push(cardRemoved1);
        array2.push(cardRemoved2);
        
        console.log(array2)
    }

    if(cardRemoved1 === cardRemoved2) {
       //war();
    }
}


//CREATE BUTTON TO DRAW CARDS
const buttonDrawCards = document.createElement("button");
buttonDrawCards.textContent = "Draw cards"

buttonDrawCards.addEventListener("click", drawCards);

document.body.appendChild(buttonDrawCards);


//SHOW DECK DIVIDED
function showDeck () {
    const container1 = document.getElementById("field");

    document.getElementById("card").style.visibility = "visible";
}

//SHOW CARDS
