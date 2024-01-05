// テスト成功

function showPrompt(): void {
  let name: string | null = prompt("What is your name?", "");
  alert(name);
}

function runTests() {
  // 既存のpromptとalertを一時保存
  const originalPrompt = window.prompt;
  const originalAlert = window.alert;

  let promptedValue = null; // promptからの返り値を保存する
  let alertedValue = null; // alertへの入力値を保存する

  // promptとalertをオーバーライド
  window.prompt = function (message, defaultValue) {
    if (typeof message !== "string") {
      throw new Error(
        `Expected prompt message to be a string, but got type ${typeof message}`
      );
    }
    promptedValue = "TestName"; // テスト用の名前
    return promptedValue;
  };

  window.alert = function (message) {
    if (typeof message !== "string") {
      throw new Error(
        `Expected alert message to be a string, but got type ${typeof message}`
      );
    }
    alertedValue = message;
  };

  try {
    showPrompt();

    if (promptedValue !== alertedValue) {
      throw new Error(
        `Expected alerted value "${alertedValue}" to match prompted value "${promptedValue}"`
      );
    }

    console.log("テストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のpromptとalert関数に戻す
    window.prompt = originalPrompt;
    window.alert = originalAlert;
  }
}

runTests();
