let userName: string = "Ilya";

alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${userName}`); // hello Ilya

// テスト用のコード
function testAlerts() {
  let alertMessages: string[] = [];

  // 既存のalertを一時保存
  const originalAlert = window.alert;

  // alertをオーバーライドして、メッセージを保存
  window.alert = function (message: string): void {
    alertMessages.push(message);
  };

  try {
    alert(`hello ${1}`);
    alert(`hello ${"name"}`);
    alert(`hello ${userName}`);

    if (alertMessages[0] !== "hello 1") {
      console.error(`Expected "hello 1", but got "${alertMessages[0]}"`);
    }

    if (alertMessages[1] !== "hello name") {
      console.error(`Expected "hello name", but got "${alertMessages[1]}"`);
    }

    if (alertMessages[2] !== "hello Ilya") {
      console.error(`Expected "hello Ilya", but got "${alertMessages[2]}"`);
    }

    console.log("全てのテストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
  }
}

testAlerts();
