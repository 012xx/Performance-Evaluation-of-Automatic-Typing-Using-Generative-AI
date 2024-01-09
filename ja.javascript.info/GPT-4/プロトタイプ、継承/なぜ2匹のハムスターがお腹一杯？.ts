type Hamster = {
  stomach: string[];
  eat: (food: string) => void;
};

let hamster: Hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [...this.stomach, food];
  },
};

let speedy = Object.create(hamster);
speedy.stomach = [];

let lazy = Object.create(hamster);
lazy.stomach = [];

// 一方が食べ物を見つけました
speedy.eat("apple");
alert(speedy.stomach); // apple

// もう一方は何も持っていません
alert(lazy.stomach); // []

// テスト
function testHamsters() {
  if (speedy.stomach.toString() !== "apple") {
    console.error(
      `Test failed for speedy.stomach. Expected "apple" but got ${speedy.stomach}`
    );
    return;
  }

  if (lazy.stomach.length !== 0) {
    console.error(
      `Test failed for lazy.stomach. Expected an empty array but got ${lazy.stomach}`
    );
    return;
  }

  console.log("All tests passed!");
}

testHamsters();
