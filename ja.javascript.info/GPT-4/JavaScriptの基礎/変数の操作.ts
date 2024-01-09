let userName: string, adminName: string; // 一度に2つの変数を定義できます

userName = "John";
adminName = userName;

// テスト用のコード
function testAlert() {
  let lastAlertMessage: string | null = null;

  // 既存のalertを一時保存
  const originalAlert: (message?: any) => void = window.alert;

  // alertをオーバーライドして、メッセージを保存
  window.alert = function (message: string): void {
    lastAlertMessage = message;
  };

  try {
    alert(adminName);

    if (lastAlertMessage !== "John") {
      console.error(`Expected "John", but got "${lastAlertMessage}"`);
    } else {
      console.log("テストが成功しました！");
    }
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
  }
}

testAlert();
