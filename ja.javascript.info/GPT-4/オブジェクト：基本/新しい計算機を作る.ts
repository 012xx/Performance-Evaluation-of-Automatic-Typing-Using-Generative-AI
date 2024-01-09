type CalculatorType = {
  a: number;
  b: number;
  read: () => void;
  sum: () => number;
  mul: () => number;
};

function Calculator(this: CalculatorType) {
  this.read = function () {
    const aValue = prompt("a?", "0");
    const bValue = prompt("b?", "0");
    this.a = aValue ? +aValue : 0;
    this.b = bValue ? +bValue : 0;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new (Calculator as any)();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// テスト用の関数
function runTests() {
  // Mock the prompt function to simulate user input
  const originalPrompt = prompt;

  (window as any).prompt = (message: string) => {
    if (message.startsWith("a?")) {
      return "5";
    } else if (message.startsWith("b?")) {
      return "3";
    }
    return "0";
  };

  const testCalculator = new (Calculator as any)();
  testCalculator.read();

  if (testCalculator.sum() !== 8) {
    console.error(
      `Test failed: Expected sum to be 8, but got ${testCalculator.sum()}`
    );
  } else {s
    console.log("Sum test passed!");
  }

  if (testCalculator.mul() !== 15) {
    console.error(
      `Test failed: Expected product to be 15, but got ${testCalculator.mul()}`
    );
  } else {
    console.log("Multiplication test passed!");
  }

  // Restore the original prompt function
  (window as any).prompt = originalPrompt;
}

// テストを実行
runTests();
