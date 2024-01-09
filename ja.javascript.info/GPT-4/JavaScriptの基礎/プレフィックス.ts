let a: number = 1,
  b: number = 1;

// テスト用のコード
function testIncrements() {
  let alertMessages: string[] = [];

  // 既存のalertを一時保存
  const originalAlert: (message?: any) => void = window.alert;

  // alertをオーバーライドして、メッセージを保存
  window.alert = function (message: string): void {
    alertMessages.push(message.toString()); // 値を文字列として保存
  };

  try {
    alert(++a); // 2
    alert(b++); // 1

    alert(a); // 2
    alert(b); // 2

    if (alertMessages[0] !== "2") {
      console.error(`Expected "2", but got "${alertMessages[0]}"`);
    }

    if (alertMessages[1] !== "1") {
      console.error(`Expected "1", but got "${alertMessages[1]}"`);
    }

    if (alertMessages[2] !== "2") {
      console.error(`Expected "2", but got "${alertMessages[2]}"`);
    }

    if (alertMessages[3] !== "2") {
      console.error(`Expected "2", but got "${alertMessages[3]}"`);
    }

    console.log("全てのテストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
  }
}

testIncrements();
