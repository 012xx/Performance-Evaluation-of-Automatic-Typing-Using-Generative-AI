type OperatorFunction = (a: number, b: number) => number;
type Methods = {
  [key: string]: OperatorFunction;
};

class Calculator {
  private methods: Methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  calculate(str: string): number {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  addMethod(name: string, func: OperatorFunction) {
    this.methods[name] = func;
  }
}

// テスト関数
function testCalculator() {
  const calculator = new Calculator();

  // 基本的な計算テスト
  if (calculator.calculate("3 + 2") !== 5) {
    console.error("Test failed for 3 + 2");
  } else {
    console.log("Test passed for 3 + 2");
  }

  // 新しいメソッドを追加してテスト
  calculator.addMethod("*", (a, b) => a * b);
  if (calculator.calculate("3 * 2") !== 6) {
    console.error("Test failed for 3 * 2");
  } else {
    console.log("Test passed for 3 * 2");
  }
}

// テストを実行
testCalculator();
