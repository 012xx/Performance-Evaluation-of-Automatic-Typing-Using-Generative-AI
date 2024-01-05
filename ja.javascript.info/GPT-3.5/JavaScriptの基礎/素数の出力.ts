// テスト成功

function show(): void {
  let n: number = 10;

  nextPrime: for (let i: number = 2; i <= n; i++) {
    for (let j: number = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    alert(i);
  }
}

// テストを行うための関数
function testShowFunction(): void {
  const originalAlert = window.alert;
  const collectedPrimes: number[] = [];

  // alertをモックする
  window.alert = function (value: any): void {
    collectedPrimes.push(value);
  };

  show();

  // 期待される素数の配列
  const expectedPrimes: number[] = [2, 3, 5, 7];

  // 収集された結果と期待される結果を比較
  if (JSON.stringify(collectedPrimes) === JSON.stringify(expectedPrimes)) {
    console.log("Test passed!");
  } else {
    console.error(
      "Test failed! Expected:",
      expectedPrimes,
      "but got:",
      collectedPrimes
    );
  }

  // 元のalert関数に戻す
  window.alert = originalAlert;
}

testShowFunction();
