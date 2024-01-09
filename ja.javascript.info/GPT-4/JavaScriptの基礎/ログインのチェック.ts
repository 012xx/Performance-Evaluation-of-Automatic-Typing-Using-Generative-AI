// 既存のalertとpromptを一時保存
const originalAlert = window.alert;
const originalPrompt = window.prompt;

let alertMessages: string[] = [];
let promptResponses: string[] = ["Admin", "TheMaster"]; // この例では'Admin'と'TheMaster'を初期の入力として模倣します

// alertをオーバーライドして、メッセージを保存
window.alert = function (message?: any): void {
  alertMessages.push(message?.toString() || "");
};

// promptをオーバーライドして、模倣したレスポンスを返す
window.prompt = function (): string | null {
  return promptResponses.shift() || null;
};

try {
  let userName: string | null = prompt("Who's there?", "");

  if (userName === "Admin") {
    let pass: string | null = prompt("Password?", "");

    if (pass === "TheMaster") {
      alert("Welcome!");
    } else if (pass === "" || pass === null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (userName === "" || userName === null) {
    alert("Canceled");
  } else {
    alert("I don't know you");
  }

  const expectedMessages = ["Welcome!"];
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
  // 元のalertとprompt関数に戻す
  window.alert = originalAlert;
  window.prompt = originalPrompt;
}
