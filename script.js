//BEHAVIOUR
//SHOW DECK DIVIDED
function showDeck() {
    createDecks();
    const container1 = document.getElementById("field");

    document.getElementById("card").style.visibility = "visible";
}

function createDecks() {
    for (let i = 0; i < 26; i++) {
        let randomNumber = Math.floor(Math.random() * 52)
        array1.push(deck[randomNumber]);

        let randomNumbers = Math.floor(Math.random() * 52)
        array2.push(deck[randomNumbers]);
    }
    console.log(array1)
    console.log(array2)
}

//TIE
function war() {
    if (array1 > 4 && array2 > 4) {
        let firstCardPlayer1 = array1.shift();
        table.push(firstCardPlayer1)

        let secondCardPlayer1 = array1.shift();
        table.push(secondCardPlayer1);

        let thirdCardPlayer1 = array1.shift();
        table.push(thirdCardPlayer1)

        let fourthCardPlayer1 = array1.shift();
        table.push(fourthCardPlayer1)

        let firstCardPlayer2 = array2.shift();
        table.push(firstCardPlayer2)

        let secondCardPlayer2 = array2.shift();
        table.push(secondCardPlayer2)

        let thirdCardPlayer2 = array2.shift();
        table.push(thirdCardPlayer2)

        let fourthCardPlayer2 = array2.shift();
        table.push(fourthCardPlayer2)

        if (fourthCardPlayer2.value > fourthCardPlayer1.value) {
            console.log("Player 2 wins");
            array2.push(...table);

        } else if (fourthCardPlayer2.value < fourthCardPlayer1.value) {
            console.log("Player 1 wins");
            array1.push(...table)
        }
        table = [];
        console.log(fourthCardPlayer1)
        console.log(fourthCardPlayer2)
        console.log(array1);
        console.log(array2)
        console.log(table)
    }
}


//REMOVE 2 CARDS FROM TOP
function drawCards() {
    let cardRemoved1 = array1.shift()
    console.log(cardRemoved1);

    const container = document.getElementById("containerCardsPlayer1");
    container.innerHTML = cardRemoved1.draw;

    let cardRemoved2 = array2.shift()
    const container2 = document.getElementById("containerCardsPlayer2");
    container2.innerHTML = cardRemoved2.draw;
    console.log(cardRemoved2);


    //COMPARE THE CARDS VALUE
    if (cardRemoved1.value > cardRemoved2.value) {
        console.log("Player 1 wins");
        array1.push(cardRemoved1);
        array1.push(cardRemoved2);

        console.log(array1);
        console.log(array2);

    } else if (cardRemoved1.value < cardRemoved2.value) {
        console.log("Player 2 wins");
        array2.push(cardRemoved1);
        array2.push(cardRemoved2);

        console.log(array1);
        console.log(array2);
    } else {
        war();
    }
}


//VARIABLES
let array1 = [];
let array2 = [];
let table = [];
let deck = [];

const naipes = {
    clubs: "♣",
    diamonds: "♦",
    hearts: "♥",
    spades: "♠",
};

const values = [
    {
        value: 1, text: "A", draw: `
        <div class="column1">
          <div>A</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="heartCenter" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>A</div>
        </div>`},
    {
        value: 2, text: "2", draw: `
        <div class="column1">
          <div>2</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterBottom" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>2</div>
        </div>`},
    {
        value: 3, text: "3", draw: `
        <div class="column1">
          <div>3</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterBottom" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>3</div>
        </div>` },
    {
        value: 4, text: "4", draw: `
        <div class="column1">
          <div>4</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterBottom" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterBottom" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>4</div>
        </div>`},
    {
        value: 5, text: "5", draw: `
        <div class="column1">
          <div>5</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>5</div>
        </div>`},
    {
        value: 6, text: "6", draw: `
        <div class="column1">
          <div>6</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>6</div>
        </div>` },
    {
        value: 7, text: "7", draw: `
        <div class="column1">
          <div>7</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>7</div>
        </div>` },
    {
        value: 8, text: "8", draw: `
        <div class="column1">
          <div>8</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>8</div>
        </div>` },
    {
        value: 9, text: "9", draw: `
        <div class="column1">
          <div>9</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>9</div>
        </div>` },
    {
        value: 10, text: "10", draw: `
        <div class="column1">
          <div>10</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="CenterBottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="TopSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
          <img class="BottomSmaller" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>10</div>
        </div>` },
    {
        value: 11, text: "J", draw: `
        <div class="column1">
          <div>J</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="jack" src="./Images/jack.png" alt="jack">
          <img class="jack invert" src="./Images/jack.png"  alt="jack">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>J</div>
        </div>` },
    {
        value: 12, text: "Q", draw: `
        <div class="column1">
          <div>Q</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="queen" src="./Images/queen.png" alt="queen">
          <img class="queen invert" src="./Images/queen.png" alt="queen">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>Q</div>
        </div>` },
    {
        value: 13, text: "K", draw: `
        <div class="column1">
          <div>K</div>
          <img class="symbolTop" src="./Images/hearts.png" alt="hearts" />
        </div>

        <div class="column2">
          <img class="king" src="./Images/king-cópia.png" alt="king">
          <img class="king invert" src="./Images/king-cópia.png" alt="king">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/hearts.png" alt="hearts" />
          <div>K</div>
        </div>`}
];


for (let naipe in naipes) {
    for (let valor of values) {
        deck.push({
            value: valor.value,
            text: valor.text,
            naipe: naipes[naipe],
            draw: valor.draw
        });
    }
}


document.getElementById("card").style.visibility = "hidden"

//CREATE PLAY BUTTON
const button = document.getElementById("play")
button.addEventListener("click", showDeck);

document.body.appendChild(button);


//CREATE BUTTON TO DRAW CARDS
const buttonDrawCards = document.getElementById("drawCards")

buttonDrawCards.addEventListener("click", drawCards);

document.body.appendChild(buttonDrawCards);
