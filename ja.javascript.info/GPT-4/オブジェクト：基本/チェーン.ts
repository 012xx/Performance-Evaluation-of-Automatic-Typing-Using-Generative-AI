// 既存のコード
type LadderType = {
  step: number;
  up: () => LadderType;
  down: () => LadderType;
  showStep: () => void;
};

let ladder: LadderType = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
  },
};

// テストコード
function testLadder() {
  ladder.up();
  if (ladder.step !== 1) {
    console.error(`Test failed: Expected step to be 1, but got ${ladder.step}`);
  } else {
    console.log("Test passed for up()!");
  }

  ladder.down();
  if (ladder.step !== 0) {
    console.error(`Test failed: Expected step to be 0, but got ${ladder.step}`);
  } else {
    console.log("Test passed for down()!");
  }

  ladder.up().up().down().up().down();
  if (ladder.step !== 1) {
    console.error(
      `Test failed: Expected step to be 1 after method chaining, but got ${ladder.step}`
    );
  } else {
    console.log("Test passed for method chaining!");
  }
}

// テスト関数の実行
testLadder();
