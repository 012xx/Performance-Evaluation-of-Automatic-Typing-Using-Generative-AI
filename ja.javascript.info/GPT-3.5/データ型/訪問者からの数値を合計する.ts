// テスト失敗

// promptのモック関数
function mockPrompt(inputs: string[]): () => void {
  let index = 0;
  const originalPrompt = window.prompt;

  window.prompt = function() {
    return inputs[index++];
  };

  return function() {
    window.prompt = originalPrompt;
  };
}

// alertのモック関数
function mockAlert(): (expected: any[]) => void {
  const alertedValues: any[] = [];
  const originalAlert = window.alert;

  window.alert = function(value) {
    alertedValues.push(value);
  };

  return function(expected) {
    if (JSON.stringify(alertedValues) === JSON.stringify(expected)) {
      console.log('Test passed!');
    } else {
      console.log(`Test failed. Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(alertedValues)}`);
    }

    window.alert = originalAlert;
  };
}

// テストの実行
function runTests(): void {
  const restorePrompt = mockPrompt(['3', '4']);
  const verifyAlerts = mockAlert();

  let a = +prompt("The first number?", "");
  let b = +prompt("The second number?", "");
  alert(a + b);

  verifyAlerts([7]);
  restorePrompt();
}

runTests();