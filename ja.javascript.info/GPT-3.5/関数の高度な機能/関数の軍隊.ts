// 適切に型を付与できず失敗

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = (function (index) {
      return function () {
        alert(index);
      };
    })(i);
    shooters.push(shooter);
  }

  return shooters;
}

// テスト用関数
function testMakeArmy() {
  let army = makeArmy();
  let testResults = [];

  // Alertを上書きしてテストが可能になるようにする
  let originalAlert = window.alert;
  window.alert = (msg) => {
    testResults.push(msg);
  };

  // 各shooterが期待する値をalertするか確認する
  for (let i = 0; i < 10; i++) {
    army[i]();
    if (testResults[i] !== i) {
      console.error(`Test failed: Expected ${i} but got ${testResults[i]}`);
      // alertを元に戻す
      window.alert = originalAlert;
      return;
    }
  }

  console.log("All tests passed!");

  // alertを元に戻す
  window.alert = originalAlert;
}

// テストを実行
testMakeArmy();
