// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessages: number[] = [];

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessages.push(Number(message));
};

try {
  let n: number = 10;

  nextPrime: for (let i: number = 2; i <= n; i++) {
    for (let j: number = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }

  const expectedPrimes = [2, 3, 5, 7];
  if (JSON.stringify(alertMessages) !== JSON.stringify(expectedPrimes)) {
    console.error(
      `Unexpected primes. Expected ${JSON.stringify(
        expectedPrimes
      )}, but got ${JSON.stringify(alertMessages)}`
    );
  } else {
    console.log("Test passed!");
  }
} catch (error) {
  console.error("テストが失敗しました:", error);
} finally {
  // 元のalert関数に戻す
  window.alert = originalAlert;
}
