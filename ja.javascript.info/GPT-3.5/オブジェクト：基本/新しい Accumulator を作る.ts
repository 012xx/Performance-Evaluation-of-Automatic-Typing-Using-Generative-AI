// （テストは通るが、any型になっていてエディタ上でエラーを吐くことがある）

class Accumulator {
  value: number;

  constructor(startingValue: number) {
    this.value = startingValue;
  }

  read(): void {
    this.value += +prompt("How much to add?", "0");
  }
}

// promptのモック関数
function mockPrompt(inputs: string[]): () => void {
  let index = 0;
  const originalPrompt = window.prompt;

  window.prompt = function () {
    return inputs[index++];
  };

  return function () {
    window.prompt = originalPrompt;
  };
}

// alertのモック関数
function mockAlert(): (expected: (number | string)[]) => void {
  const alertedValues: (number | string)[] = [];
  const originalAlert = window.alert;

  window.alert = function (value) {
    alertedValues.push(value);
  };

  return function (expected: (number | string)[]) {
    if (JSON.stringify(alertedValues) === JSON.stringify(expected)) {
      console.log("Test passed!");
    } else {
      console.log(
        `Test failed. Expected ${JSON.stringify(
          expected
        )}, but got ${JSON.stringify(alertedValues)}`
      );
    }

    window.alert = originalAlert;
  };
}

// テストの実行
function runTests() {
  const restorePrompt = mockPrompt(["2", "3"]);
  const verifyAlerts = mockAlert();

  let accumulator: Accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);

  verifyAlerts([6]);
  restorePrompt();
}

runTests();
