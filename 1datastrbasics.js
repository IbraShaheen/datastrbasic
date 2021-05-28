const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(age, highlight, next = null) {
    this.age = age;
    this.highlight = highlight;
    this.next = next;
  }
}

class LinkedList {
  constructor(age, highlight) {
    this.head = new Node(age, highlight);
  }

  insertBeginning = (age, highlight) => {
    const newNode = new Node(age, highlight, this.head);

    this.head = newNode;
  };

  getLinkedList = () => {
    //Set LinkedList head

    let current = this.head;

    while (current) {
      console.log(`Age: ${current.age}, Highlight: ${current.highlight}`);

      //Set a head to be the next Node
      current = current.next;
    }
  };

  insertHighlights = (age) => {
    let current = this.head;

    while (current.age < age) {
      let currentAge = current.age + 1;

      if (current.next && current.next.age === currentAge) {
        current = current.next;

        //If there is no next node
      } else {
        let highlight = prompt(
          `What was the highlight of when you were ${currentAge}?`
        );

        let newNode = new Node(currentAge, highlight, current.next);

        current.next = newNode;
        current = newNode;
      }
    }
  };
}

const you = new LinkedList(7, "I got a kite");

you.insertBeginning(3, "I started walking");

you.insertBeginning(1, "I was born");

const age = prompt("What is your age?");

you.insertHighlights(age);

you.getLinkedList();

console.log(you);
