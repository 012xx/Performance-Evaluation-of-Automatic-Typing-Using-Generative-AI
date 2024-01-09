// 既存のpromptとalertを一時保存
const originalPrompt = window.prompt;
const originalAlert = window.alert;

let alertMessage: string | null = null;

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessage = message?.toString() || null;
};

try {
  const inputs: (string | null)[] = ["0", "1", "2", "3", "4"];
  const expectedMessages: (string | null)[] = ["0", "1", "2,3", "2,3", null];

  for (let i = 0; i < inputs.length; i++) {
    // promptをオーバーライドして、特定の値を返すように設定
    window.prompt = function (): string | null {
      return inputs[i];
    };

    let a: number = +(prompt("a?", "") || 0);

    switch (a) {
      case 0:
        alert(0);
        break;

      case 1:
        alert(1);
        break;

      case 2:
      case 3:
        alert("2,3");
        break;
    }

    if (alertMessage !== expectedMessages[i]) {
      console.error(
        `For input ${inputs[i]}, expected "${expectedMessages[i]}", but got "${alertMessage}".`
      );
    } else {
      console.log(`Test for input ${inputs[i]} passed!`);
    }

    // Reset alertMessage for the next iteration
    alertMessage = null;
  }
} catch (error) {
  console.error("テストが失敗しました:", error);
} finally {
  // 元のpromptとalert関数に戻す
  window.prompt = originalPrompt;
  window.alert = originalAlert;
}
