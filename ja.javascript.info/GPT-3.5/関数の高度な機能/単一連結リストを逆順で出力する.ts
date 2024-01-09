// 適切に肩を付与できず失敗

interface ListNode {
  value: number;
  next: ListNode | null;
}

const list: ListNode = {
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

function printReverseList(list: ListNode | null): void {
  if (list) {
    if (list.next) {
      printReverseList(list.next);
    }
    alert(list.value);
  }
}

// 実際の処理を行います
printReverseList(list);

// テストコード
function testPrintReverseList() {
  let output: number[] = [];
  const expectedOutput: number[] = [4, 3, 2, 1];
  let testPassed: boolean = true;

  // alert関数を一時的にオーバーライド
  const originalAlert = alert;
  alert = (value: number) => {
    output.push(value);
  };

  // printReverseList関数をテスト
  printReverseList(list);

  // alert関数を元に戻す
  alert = originalAlert;

  // 出力が期待値と一致するか確認
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== expectedOutput[i]) {
      console.error(
        `Test failed: Expected ${expectedOutput[i]}, got ${output[i]}`
      );
      testPassed = false;
      break;
    }
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を実行
testPrintReverseList();
