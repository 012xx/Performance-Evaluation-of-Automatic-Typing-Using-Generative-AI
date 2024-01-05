// テスト成功

function showAlert(): void {
  alert("I'm JavaScript!");
}

function runTests() {
  let lastAlertMessage = null; // この変数にalertのメッセージを一時保存します。

  // 既存のalertを一時保存
  const originalAlert = window.alert;

  // alertをオーバーライドして、最後のメッセージを保存
  window.alert = function (message) {
    lastAlertMessage = message;
  };

  try {
    showAlert();

    // lastAlertMessageのデータ型がstringであることを確認
    if (typeof lastAlertMessage === "string") {
      console.log("テストが成功しました！");
    } else {
      throw new Error(
        `Expected type "string", but got "${typeof lastAlertMessage}"`
      );
    }
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
  }
}

runTests();
