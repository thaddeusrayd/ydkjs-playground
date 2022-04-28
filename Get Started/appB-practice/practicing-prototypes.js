/*

Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.

The basic behavior of a single reel is defined in the reel object below. But the slot machine needs individual reels—objects that delegate to reel, and which each have a position property.

A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel: the current slot (position), one slot above (position - 1), and one slot below (position + 1). So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.

*/

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [
    (reel1 = Object.create(reel)),
    (reel2 = Object.create(reel)),
    (reel3 = Object.create(reel)),
    // this slot machine needs 3 separate reels
    // hint: Object.create(..)
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    let reel1Next;
    let reel1Prev;
    let reel2Next;
    let reel2Prev;
    let reel3Next;
    let reel3Prev;

    if (reel1.position < reel.symbols.length - 1) {
      reel1Next = reel1.position + 1;
    } else {
      reel1Next = 0;
    }
    if (reel1.position > 0) {
      reel1Prev = reel1.position - 1;
    } else {
      reel1Prev = reel.symbols.length - 1;
    }

    if (reel2.position < reel.symbols.length - 1) {
      reel2Next = reel2.position + 1;
    } else {
      reel2Next = 0;
    }
    if (reel2.position > 0) {
      reel2Prev = reel2.position - 1;
    } else {
      reel2Prev = reel.symbols.length - 1;
    }

    if (reel3.position < reel.symbols.length - 1) {
      reel3Next = reel3.position + 1;
    } else {
      reel3Next = 0;
    }
    if (reel3.position > 0) {
      reel3Prev = reel3.position - 1;
    } else {
      reel3Prev = reel.symbols.length - 1;
    }

    console.log(
      "\n",
      reel1.symbols[reel1Prev],
      "|",
      reel2.symbols[reel2Prev],
      "|",
      reel3.symbols[reel3Prev],
      "\n",
      reel1.symbols[reel1.position],
      "|",
      reel2.symbols[reel2.position],
      "|",
      reel3.symbols[reel3.position],
      "\n",
      reel1.symbols[reel1Next],
      "|",
      reel2.symbols[reel2Next],
      "|",
      reel3.symbols[reel3Next]
    );
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
