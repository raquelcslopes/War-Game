//BEHAVIOUR
//SHOW DECK DIVIDED
function showDeck() {
  createDecks();
  const container1 = document.getElementById("field");

  document.getElementById("deck").style.visibility = "visible";
  document.getElementById("deck2").style.visibility = "visible";
}

const createDecks = () => {
  for (let i = 0; i < 26; i++) {
    let randomNumber = Math.floor(Math.random() * deck.length)
    array1.push(deck[randomNumber]);
    deck.splice(deck[randomNumber],1);

    let randomNumbers = Math.floor(Math.random() * deck.length)
    array2.push(deck[randomNumbers]);
    deck.splice(deck[randomNumbers],1);
  }
}

//TIE
function war() {
  table = [];

  if (array1.length > 4 && array2.length > 4) {
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

    if (fourthCardPlayer1.value === fourthCardPlayer2.value) {
      war();
    }
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

  const container = document.getElementById("containerCardsPlayer1");
  container.innerHTML = cardRemoved1.draw;

  let cardRemoved2 = array2.shift()
  const container2 = document.getElementById("containerCardsPlayer2");
  container2.innerHTML = cardRemoved2.draw;


  //COMPARE THE CARDS VALUE
  if (cardRemoved1.value > cardRemoved2.value) {
    console.log("Player 1 wins");
    array1.push(cardRemoved1);
    array1.push(cardRemoved2);
  } else if (cardRemoved1.value < cardRemoved2.value) {
    console.log("Player 2 wins");
    array2.push(cardRemoved1);
    array2.push(cardRemoved2);
  } else {
    war();
  }
}

function game() {
  while (array1.length > 0 && array2.length > 0) {
    drawCards();
  }

  if(array1.length === 0 || array2.length=== 0) {
    console.error("GAME OVER")
  }
}

//VARIABLES
let array1 = [];
let array2 = [];
let table = [];
let deck = [];

const naipes = [
  "♣",
  "♦",
  "♥",
  "♠",
];

const values = [
  {
    value: 1, text: "A", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>A</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="clubCenter" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="/Images/clubs.png" alt="clubs" />
          <div>A</div>
        </div>`, `
        <div class="column1">
          <div>A</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="diamondCenter" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>A</div>
        </div>`, `
        <div class="column1">
          <div>A</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="spadeCenter" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="/Images/spades.png" alt="spades" />
          <div>A</div>
        </div>`]

  },
  {
    value: 2, text: "2", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>2</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/clubs.png" alt="clubs" />
          <img class="CenterBottom" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>2</div>
        </div>`, `
        <div class="column1">
          <div>2</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterBottom" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>2</div>
        </div>`, `
        <div class="column1">
          <div>2</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/spades.png" alt="spades" />
          <img class="CenterBottom" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>2</div>
        </div>`]
  },
  {
    value: 3, text: "3", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>3</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/clubs.png" />
          <img class="CenterTop" src="./Images/clubs.png" alt="clubs" />
          <img class="CenterBottom" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>3</div>
        </div>`, `
        <div class="column1">
          <div>3</div>
          <img class="symbolTop" src="/Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterBottom" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>3</div>
        </div>`, `
        <div class="column1">
          <div>3</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/spades.png" alt="spades" />
          <img class="CenterTop" src="./Images/spades.png" alt="spades" />
          <img class="CenterBottom" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>3</div>
        </div>`]
  },
  {
    value: 4, text: "4", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>4</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/clubs.png" alt="clubs" />
          <img class="CenterBottom" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/clubs.png" alt="clubs" />
          <img class="CenterBottom" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>4</div>
        </div>`, `
        <div class="column1">
          <div>4</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterBottom" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterBottom" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>4</div>
        </div>`, `
        <div class="column1">
          <div>4</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="Top" src="/Images/spades.png" alt="spades" />
          <img class="Bottom" src="/Images/spades.png" alt="spades" />
        </div>

        <div class="column3">
          <img class="Top" src="./Images/spades.png" alt="spades" />
          <img class="Bottom" src="/Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="/Images/spades.png" alt="spades" />
          <div>4</div>
        </div>`]
  },
  {
    value: 5, text: "5", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>5</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>5</div>
        </div>`, `
        <div class="column1">
          <div>5</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>5</div>
        </div>`, `
        <div class="column1">
          <div>5</div>
          <img class="symbolTop" src="./Images/spades.png" alt="" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/spades.png" alt="" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="" />
          <div>5</div>
        </div>`]
  },
  {
    value: 6, text: "6", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>6</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>6</div>
        </div>`, `
        <div class="column1">
          <div>6</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>6</div>
        </div>`, `
        <div class="column1">
          <div>6</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>6</div>
        </div>`]
  },
  {
    value: 7, text: "7", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>7</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>7</div>
        </div>`, `
        <div class="column1">
          <div>7</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>7</div>
        </div>`, `
        <div class="column1">
          <div>7</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>7</div>
        </div>`]
  },
  {
    value: 8, text: "8", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>8</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>8</div>
        </div>`, `
        <div class="column1">
          <div>8</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>8</div>
        </div>`, `
        <div class="column1">
          <div>8</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column3">
          <img class="CenterTop" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>8</div>
        </div>`]
  },
  {
    value: 9, text: "9", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>9</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>9</div>
        </div>`, `
        <div class="column1">
          <div>9</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>9</div>
        </div>`, `
        <div class="column1">
          <div>9</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column3">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>9</div>
        </div>`]
  },
  {
    value: 10, text: "10", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>10</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="CenterBottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="TopSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
          <img class="BottomSmaller" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>10</div>
        </div>`, `
        <div class="column1">
          <div>10</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="CenterBottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="TopSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
          <img class="BottomSmaller" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>10</div>
        </div>`, `
        <div class="column1">
          <div>10</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column3">
          <img class="CenterTopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="CenterBottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column4">
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="TopSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
          <img class="BottomSmaller" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>10</div>
        </div>`]
  },
  {
    value: 11, text: "J", draw: [`
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
        </div>`, `<div class="column1">
            <div>J</div>
            <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
          </div>
  
          <div class="column2">
            <img class="jack" src="./Images/jack.png" alt="jack">
            <img class="jack invert" src="./Images/jack.png"  alt="jack">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
            <div>J</div>
          </div>`, `<div class="column1">
            <div>J</div>
            <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
          </div>
  
          <div class="column2">
            <img class="jack" src="./Images/jack.png" alt="jack">
            <img class="jack invert" src="./Images/jack.png"  alt="jack">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
            <div>J</div>
          </div>`, `<div class="column1">
            <div>J</div>
            <img class="symbolTop" src="./Images/spades.png" alt="spades" />
          </div>
  
          <div class="column2">
            <img class="jack" src="./Images/jack.png" alt="jack">
            <img class="jack invert" src="./Images/jack.png"  alt="jack">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
            <div>J</div>
          </div>`]
  },
  {
    value: 12, text: "Q", draw: [`
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
        </div>`, `
          <div class="column1">
            <div>Q</div>
            <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
          </div>
  
          <div class="column2">
            <img class="queen" src="./Images/queen.png" alt="queen">
            <img class="queen invert" src="./Images/queen.png" alt="queen">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
            <div>Q</div>
          </div>`, `
          <div class="column1">
            <div>Q</div>
            <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
          </div>
  
          <div class="column2">
            <img class="queen" src="./Images/queen.png" alt="queen">
            <img class="queen invert" src="./Images/queen.png" alt="queen">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
            <div>Q</div>
          </div>`, `
          <div class="column1">
            <div>Q</div>
            <img class="symbolTop" src="./Images/spades.png" alt="spades" />
          </div>
  
          <div class="column2">
            <img class="queen" src="./Images/queen.png" alt="queen">
            <img class="queen invert" src="./Images/queen.png" alt="queen">
          </div>
  
          <div class="column5">
            <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
            <div>Q</div>
          </div>`]
  },
  {
    value: 13, text: "K", draw: [`
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
        </div>`, `
        <div class="column1">
          <div>K</div>
          <img class="symbolTop" src="./Images/clubs.png" alt="clubs" />
        </div>

        <div class="column2">
          <img class="king" src="./Images/king-cópia.png" alt="king">
          <img class="king invert" src="./Images/king-cópia.png" alt="king">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/clubs.png" alt="clubs" />
          <div>K</div>
        </div>`, `
        <div class="column1">
          <div>K</div>
          <img class="symbolTop" src="./Images/diamond.png" alt="diamond" />
        </div>

        <div class="column2">
          <img class="king" src="./Images/king-cópia.png" alt="king">
          <img class="king invert" src="./Images/king-cópia.png" alt="king">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/diamond.png" alt="diamond" />
          <div>K</div>
        </div>`, `
        <div class="column1">
          <div>K</div>
          <img class="symbolTop" src="./Images/spades.png" alt="spades" />
        </div>

        <div class="column2">
          <img class="king" src="./Images/king-cópia.png" alt="king">
          <img class="king invert" src="./Images/king-cópia.png" alt="spades">
        </div>

        <div class="column5">
          <img class="symbolBottom" src="./Images/spades.png" alt="spades" />
          <div>K</div>
        </div>`]
  }
];

for (const [i, naipe] of naipes.entries()) {
  for (let valor of values) {
    deck.push({
      value: valor.value,
      text: valor.text,
      naipe: naipes[naipe],
      draw: valor.draw[i]
    });
  }
}


document.getElementById("deck").style.visibility = "hidden"
document.getElementById("deck2").style.visibility = "hidden"

//CREATE PLAY BUTTON
const button = document.getElementById("play")
button.addEventListener("click", () => {
  showDeck(),
  document.getElementById("drawCards").disabled = false;
} );
document.body.appendChild(button);


//CREATE BUTTON TO DRAW CARDS
const buttonDrawCards = document.getElementById("drawCards")

buttonDrawCards.addEventListener("click", () => {
  setTimeout(() => {
    drawCards();
    document.body.appendChild(buttonDrawCards);
  },1000)
  document.getElementById("card3Up").classList.add("animationDown");
    document.getElementById("card3Down").classList.add("animationUp");
})

