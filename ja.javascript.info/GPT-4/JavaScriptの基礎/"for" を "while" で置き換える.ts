// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessages: string[] = [];

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessages.push(message?.toString() || "");
};

try {
  let i: number = 0;
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }

  const expectedMessages = ["number 0!", "number 1!", "number 2!"];
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
