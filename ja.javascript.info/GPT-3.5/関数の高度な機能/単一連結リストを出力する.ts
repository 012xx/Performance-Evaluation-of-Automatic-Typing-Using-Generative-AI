// 適切に型を付与できず失敗

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  alert(list.value); // 現在のアイテムを出力
  if (list.next) {
    printList(list.next); // 残ったリストに対して同じことをする
  }
}

// テスト用の関数。printList関数が正しく動作するかを確認する
function testPrintList() {
  let testPassed = true;
  let output = [];
  let expectedOutput = [1, 2, 3, 4];

  // alert関数を一時的に上書き
  const originalAlert = alert;
  alert = (value) => output.push(value);

  printList(list);

  // alert関数を元に戻す
  alert = originalAlert;

  for (let i = 0; i < output.length; i++) {
    if (output[i] !== expectedOutput[i]) {
      console.error(
        `Test failed: Expected ${expectedOutput[i]}, got ${output[i]}`
      );
      testPassed = false;
    }
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を呼び出す
testPrintList();
