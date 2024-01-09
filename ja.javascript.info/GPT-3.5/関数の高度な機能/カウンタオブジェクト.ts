// 成功

class Counter {
  private count: number = 0;

  up(): number {
    return ++this.count;
  }

  down(): number {
    return --this.count;
  }
}

const counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1

// テストコード
function testCounter() {
  const counter = new Counter();
  let testPassed: boolean = true;

  if (counter.up() !== 1) {
    console.error("Test failed: counter.up() should return 1");
    testPassed = false;
  }

  if (counter.up() !== 2) {
    console.error("Test failed: counter.up() should return 2");
    testPassed = false;
  }

  if (counter.down() !== 1) {
    console.error("Test failed: counter.down() should return 1");
    testPassed = false;
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を実行
testCounter();
