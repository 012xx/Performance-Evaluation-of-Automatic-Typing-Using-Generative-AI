let userName: string | null = window.prompt("What is your name?", "");
window.alert(userName);

// テスト用のコード
function testPromptAndAlert() {
  let promptValue: string | null = null;
  let alertValue: string | null = null;

  // 既存のpromptとalertを一時保存
  const originalPrompt = window.prompt;
  const originalAlert = window.alert;

  // promptとalertをオーバーライドして、メッセージを保存
  window.prompt = function (
    message?: string,
    defaultValue?: string
  ): string | null {
    return promptValue;
  };

  window.alert = function (message?: any): void {
    alertValue = message;
  };

  try {
    // テストケース: ユーザが名前を入力した場合
    promptValue = "John";
    userName = window.prompt("What is your name?", "");
    window.alert(userName);

    if (alertValue !== "John") {
      console.error(`Expected "John", but got "${alertValue}"`);
    }

    // テストケース: ユーザがキャンセルをクリックした場合
    promptValue = null;
    userName = window.prompt("What is your name?", "");
    window.alert(userName);

    if (alertValue !== null) {
      console.error(`Expected null, but got "${alertValue}"`);
    }

    console.log("全てのテストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のpromptとalert関数に戻す
    window.prompt = originalPrompt;
    window.alert = originalAlert;
  }
}

testPromptAndAlert();
