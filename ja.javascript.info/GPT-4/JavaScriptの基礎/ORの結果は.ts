// 既存のalertを一時保存
const originalAlert = window.alert;

let lastAlertMessage: string | null = null;

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  lastAlertMessage = message?.toString() || null;
};

try {
  alert(null || 2 || undefined);

  if (lastAlertMessage !== "2") {
    console.error(`Expected "2", but got "${lastAlertMessage}"`);
  } else {
    console.log("Test passed!");
  }
} catch (error) {
  console.error("テストが失敗しました:", error);
} finally {
  // 元のalert関数に戻す
  window.alert = originalAlert;
}
