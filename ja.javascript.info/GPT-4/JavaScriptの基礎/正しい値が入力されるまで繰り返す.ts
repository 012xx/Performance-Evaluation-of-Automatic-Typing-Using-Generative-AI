// 既存のpromptを一時保存
const originalPrompt = window.prompt;

let promptCalls: number = 0;

// promptをオーバーライドして、特定の値を返すように設定
window.prompt = function (message?: string, _default?: string): string | null {
  promptCalls++;
  if (promptCalls === 1) return "50"; // 最初の呼び出しで50を返す
  if (promptCalls === 2) return "101"; // 二度目の呼び出しで101を返す
  return null; // それ以外の場合はnullを返す
};

try {
  let num: string | null;

  do {
    num = prompt("Enter a number greater than 100?", "0");
  } while (num && +num <= 100);

  if (promptCalls !== 2) {
    console.error(
      `Expected prompt to be called 2 times, but was called ${promptCalls} times.`
    );
  } else {
    console.log("Test passed!");
  }
} catch (error) {
  console.error("テストが失敗しました:", error);
} finally {
  // 元のprompt関数に戻す
  window.prompt = originalPrompt;
}
