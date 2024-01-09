class Counter {
  private count: number = 0;

  up(): number {
    return ++this.count;
  }

  down(): number {
    return --this.count;
  }
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

// テスト
function testCounter() {
  let counterTest = new Counter();
  let result1 = counterTest.up();
  let result2 = counterTest.up();
  let result3 = counterTest.down();

  if (result1 === 1 && result2 === 2 && result3 === 1) {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected 1, 2, 1 but got ${result1}, ${result2}, ${result3}`
    );
  }
}

testCounter();
