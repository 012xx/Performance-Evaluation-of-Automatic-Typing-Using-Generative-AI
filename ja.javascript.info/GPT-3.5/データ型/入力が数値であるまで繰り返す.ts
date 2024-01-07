// テスト失敗

// readNumberの関数定義
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

// 以下、テストコード
// promptのモック関数
function mockPrompt(inputs) {
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
function mockAlert() {
  const alertedValues = [];
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
function runTests() {
  const restorePrompt = mockPrompt(['not-a-number', '5']);
  const verifyAlerts = mockAlert();

  alert(`Read: ${readNumber()}`);

  verifyAlerts(['Read: 5']);
  restorePrompt();
}

runTests();