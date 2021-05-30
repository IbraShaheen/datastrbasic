// FILO: first in last out

class Node {
  constructor(card, number, next = null) {
    this.card = card;
    this.number = number;
    this.next = next;
  }
  firstCard = () => `${this.card}(${this.number})`;
}



class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;
 
  isEmpty = () => this.length === 0;
 
  peek = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      return this.top.firstCard();
    }
  };

  push = (color, number) => {
    if (this.isFull()) {
      console.log("Oops! The deck is full.");
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };
  
  pop = () => {
    if (this.isEmpty()) {
      console.log("Oh no! The deck is empty.");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.firstCard();
    }
  };

  createDeck = () => {
    let deckCounter = 0;
    while (deckCounter < this.limit) {
      this.push(random(colors), random(numbers));
      deckCounter++;
    }
  };
}




const colors = ["blue", "green", "yellow","red"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


let deck = new Stack();

deck.createDeck();


let player1 = new Stack(5);
let counterOne = 0;
if (player1.isEmpty() && !player1.isFull()) {
  console.log(` ـــــــــــــــــــــــــــــــــــــــ
  Player 1: \n ـــــــــــــــــــــــــــــــــــــــ
  `);
  while (counterOne < player1.limit) {
 let card = deck.pop();
 player1.push(card);

    console.log(`${counterOne + 1}  ${card}`);
    counterOne++;
  }

}


let player2 = new Stack(5);
let player2Counter = 0;
if (player2.isEmpty() && !player2.isFull()) {
  console.log(` ـــــــــــــــــــــــــــــــــــــــ
  Player 2: \n ـــــــــــــــــــــــــــــــــــــــ
  `);
  while (player2Counter < player2.limit) {
    let card2 = deck.pop();
    player2.push(card2);
    console.log(`${player2Counter + 1} ${card2}`);
    player2Counter++;
  }

}


console.log(`ـــــــــــــــــــــــــــــــــــــــ
The first card in the deck is ${deck.peek()} \nـــــــــــــــــــــــــــــــــــــــ
`);
