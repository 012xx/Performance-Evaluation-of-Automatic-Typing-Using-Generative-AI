// 既存の関数
function show(): void {
  let i: number = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}

// テスト用関数
function testShowFunction(): void {
  // 組み込みのalert関数を一時的に保持
  const originalAlert = window.alert;

  const alertedMessages: string[] = []; // ここで型を明示的に指定

  // alert関数を上書きして、メッセージを配列に保存する
  window.alert = (message: string): void => {
    // 引数と戻り値の型を明示的に指定
    alertedMessages.push(message);
  };

  show();

  // 期待されるメッセージの配列
  const expectedMessages: string[] = ["number 0!", "number 1!", "number 2!"];

  // 期待されるメッセージとアラートされたメッセージが一致するかどうかを確認
  const testPassed: boolean =
    JSON.stringify(expectedMessages) === JSON.stringify(alertedMessages);

  if (testPassed) {
    console.log("Test passed!"); // テストがパスした場合
  } else {
    console.error("Test failed!"); // テストが失敗した場合
  }

  // alert関数をオリジナルに戻す
  window.alert = originalAlert;
}

// テストを実行
testShowFunction();
