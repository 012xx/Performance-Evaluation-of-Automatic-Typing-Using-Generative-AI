// テスト成功

function show(): void {
  for (let i: number = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      alert(i);
    }
  }
}

// テスト用の関数
function testShowFunction(): void {
  const originalAlert = window.alert; // オリジナルのalert関数を保存
  const alertedValues: number[] = []; // アラートされた値を保存するための配列

  // alert関数をオーバーライドして、実際にアラートを表示する代わりに、値を配列に保存する
  window.alert = (value: number) => {
    alertedValues.push(value);
  };

  show();

  // 期待される偶数の値
  const expectedValues: number[] = [2, 4, 6, 8, 10];

  // 期待される値とアラートされた値が一致するかどうかを確認
  let testPassed: boolean =
    JSON.stringify(expectedValues) === JSON.stringify(alertedValues);

  if (testPassed) {
    console.log("Test passed!"); // テストがパスした場合
  } else {
    console.error("Test failed!"); // テストが失敗した場合
  }

  // alert関数をオリジナルに戻す
  window.alert = originalAlert;
}

// テストの実行
testShowFunction();
