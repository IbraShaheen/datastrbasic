// FIFO: first in first out

class Node {
  constructor(groupsize, next = null) {
    this.groupsize = groupsize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 4 /* I'm not sure maybe the limit = 10*/ ) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waitingtime = 0;
  }


  isFull = () => this.length === this.limit;


  isEmpty = () => this.length === 0;


  peek = () => {
   if(this.isEmpty()) console.log(`no time to wait ${this.waitingtime}`);
   else { return this.front}
 }


  addnode = (groupsize) => {
    const newNode = new Node(groupsize);

    if (this.isEmpty()) this.front = newNode; // here this.front & this.back are the same

    else this.back.next = newNode; //linking
    this.back = newNode; //adding
    this.length++;

    this.waitingtime += groupsize * 0.5;
    console.log(
      `${this.length} groups of people in front of you. The waiting time ${this.waitingtime} min`);
  };


  enqueue = (groupsize) => {
    if (this.isFull()) {
      console.log("queue is full, you can't enter any group");

    } else {
      let people = groupsize;
      while (people > 12) {
        this.addnode(12);
        people -= 12;
      }
      this.addnode(people);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Empty queue, nothing to rideout");

    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;

      } else {
        this.front = removed.next;
      }
      this.length--;

      this.waitingtime -= removed.groupsize * 0.5;
      return `\n The front group left. ${this.length} groups still in front of you. The waiting time is ${this.waitingtime} min`;
    }
  };
}

const ride = new Queue();

ride.enqueue(2);
ride.enqueue(6);
ride.enqueue(14);
ride.enqueue(6);


//console.log(ride.peek());

 console.log(ride.dequeue()); 
// console.log(ride.dequeue()); 