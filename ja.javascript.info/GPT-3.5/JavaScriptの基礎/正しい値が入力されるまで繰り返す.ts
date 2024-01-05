// テスト失敗

function show(): void {
    let num: string | null;
  
    do {
      num = prompt("Enter a number greater than 100?", "0");
    } while (num !== null && +num <= 100);
  }
  
  // テストを行うための関数
  function testShowFunction(): void {
    // 元のprompt関数を一時的に保存
    const originalPrompt = window.prompt;
  
    // テスト用の入力値
    const testInputs: (string | null)[] = ["50", "80", "", null, "110"];
    let inputIndex = 0;
  
    // promptをモックする
    window.prompt = function(message?: string, _default?: string): string | null {
      const response: string | null = testInputs[inputIndex++];
      return response;
    };
  
    show();
  
    // 全てのテスト入力が用いられたかどうか確認
    if (inputIndex === testInputs.length) {
      console.log('Test passed!');
    } else {
      console.error('Test failed!');
    }
  
    // 元のprompt関数に戻す
    window.prompt = originalPrompt;
  }
  
  testShowFunction();