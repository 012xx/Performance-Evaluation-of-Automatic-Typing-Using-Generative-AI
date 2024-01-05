// （テストは通るが、any型になっていてエディタ上でエラーを吐くことがある）

let obj: Record<string, any> = {};

function A(): Record<string, any> {
  return obj;
}

function B(): Record<string, any> {
  return obj;
}

// alertのモック関数
function mockAlert(): {
  getAlertedValue: () => any;
  restore: () => void;
} {
  let alertedValue: any;
  const originalAlert = window.alert;
  window.alert = function (value: any): void {
    alertedValue = value;
  };
  return {
    getAlertedValue: () => alertedValue,
    restore: () => {
      window.alert = originalAlert;
    },
  };
}

// テストの実行
function runTests() {
  const mock = mockAlert();

  alert(new A() === new B());

  if (mock.getAlertedValue() === true) {
    console.log("Test passed!");
  } else {
    console.log(
      `Test failed. Expected true, but got ${mock.getAlertedValue()}`
    );
  }

  mock.restore();
}

runTests();
