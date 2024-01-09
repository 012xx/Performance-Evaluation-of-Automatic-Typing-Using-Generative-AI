// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessage: string | null = null;

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessage = message?.toString() || null;
};

try {
  const browsers: string[] = [
    "Edge",
    "Chrome",
    "Firefox",
    "Safari",
    "Opera",
    "Unknown",
  ];
  const expectedMessages: string[] = [
    "You've got the Edge!",
    "Okay we support these browsers too",
    "Okay we support these browsers too",
    "Okay we support these browsers too",
    "Okay we support these browsers too",
    "We hope that this page looks ok!",
  ];

  for (let i = 0; i < browsers.length; i++) {
    let browser: string = browsers[i];

    if (browser === "Edge") {
      alert("You've got the Edge!");
    } else if (
      browser === "Chrome" ||
      browser === "Firefox" ||
      browser === "Safari" ||
      browser === "Opera"
    ) {
      alert("Okay we support these browsers too");
    } else {
      alert("We hope that this page looks ok!");
    }

    if (alertMessage !== expectedMessages[i]) {
      console.error(
        `For browser ${browser}, expected "${expectedMessages[i]}", but got "${alertMessage}".`
      );
    } else {
      console.log(`Test for browser ${browser} passed!`);
    }
  }
} catch (error) {
  console.error("テストが失敗しました:", error);
} finally {
  // 元のalert関数に戻す
  window.alert = originalAlert;
}
