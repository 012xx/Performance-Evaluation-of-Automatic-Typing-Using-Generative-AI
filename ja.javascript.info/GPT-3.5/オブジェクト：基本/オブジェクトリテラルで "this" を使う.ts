// テスト成功
// 2度目の変換で成功

let calculator = {
  a: 0,
  b: 0,
  sum(this: { a: number; b: number }) {
    return this.a + this.b;
  },

  mul(this: { a: number; b: number }) {
    return this.a * this.b;
  },

  read(this: { a: number; b: number }) {
    let aResult = prompt("a?", "0");
    let bResult = prompt("b?", "0");

    // nullチェックを行い、nullの場合はデフォルトの'0'を使用する
    this.a = +(aResult !== null ? aResult : "0");
    this.b = +(bResult !== null ? bResult : "0");
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// テスト
function testCalculator(): void {
  // テスト用のダミー値を設定
  calculator.a = 5;
  calculator.b = 10;

  // sumのテスト
  let expectedSum: number = 15;
  if (calculator.sum() !== expectedSum) {
    console.error(
      `sum() test failed. Expected ${expectedSum} but got ${calculator.sum()}.`
    );
  } else {
    console.log("sum() test passed!");
  }

  // mulのテスト
  let expectedMul: number = 50;
  if (calculator.mul() !== expectedMul) {
    console.error(
      `mul() test failed. Expected ${expectedMul} but got ${calculator.mul()}.`
    );
  } else {
    console.log("mul() test passed!");
  }
}

// テストを実行
testCalculator();
