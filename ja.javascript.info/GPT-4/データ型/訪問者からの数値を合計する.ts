// 既存のコード
let a: number = +prompt("The first number?", "")!;
let b: number = +prompt("The second number?", "")!;

alert(a + b);

// テスト用の関数
function testAddition() {
  // promptをモックして、特定の値を返すように設定
  const originalPrompt = window.prompt;

  let promptCounter = 0;
  window.prompt = function () {
    promptCounter++;
    if (promptCounter === 1) return "5";
    if (promptCounter === 2) return "3";
    return "";
  };

  let a: number = +prompt("The first number?", "")!;
  let b: number = +prompt("The second number?", "")!;

  if (a + b !== 8) {
    console.error(`Test failed: Expected sum to be 8, but got ${a + b}`);
  } else {
    console.log("Addition test passed!");
  }

  // promptのオリジナルの振る舞いを復元
  window.prompt = originalPrompt;
}

// テストを実行
testAddition();
