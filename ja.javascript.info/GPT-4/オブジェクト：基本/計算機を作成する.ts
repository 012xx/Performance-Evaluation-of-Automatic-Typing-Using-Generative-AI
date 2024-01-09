type CalculatorType = {
  a: number;
  b: number;
  sum: () => number;
  mul: () => number;
  read: () => void;
};

let calculator: CalculatorType = {
  a: 0,
  b: 0,
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", "0")!;
    this.b = +prompt("b?", "0")!;
  },
};

// テスト関数の定義
function testCalculator() {
  // テスト用のダミー関数を設定
  window.prompt = (message?: string, _default?: string) => {
    if (message && message.includes("a?")) return "2";
    if (message && message.includes("b?")) return "3";
    return "";
  };

  calculator.read();

  if (calculator.sum() !== 5) {
    console.error(
      `Test failed: Expected sum to be 5, but got ${calculator.sum()}`
    );
  } else {
    console.log("Test passed for sum!");
  }

  if (calculator.mul() !== 6) {
    console.error(
      `Test failed: Expected product to be 6, but got ${calculator.mul()}`
    );
  } else {
    console.log("Test passed for mul!");
  }
}

// テスト関数の実行
testCalculator();
