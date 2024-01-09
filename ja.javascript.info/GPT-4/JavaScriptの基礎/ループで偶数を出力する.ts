// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessages: number[] = [];

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessages.push(Number(message));
};

try {
  for (let i: number = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i);
    }
  }

  const expectedMessages = [2, 4, 6, 8, 10];
  if (JSON.stringify(alertMessages) !== JSON.stringify(expectedMessages)) {
    console.error(
      `Unexpected alert sequence. Expected ${JSON.stringify(
        expectedMessages
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
