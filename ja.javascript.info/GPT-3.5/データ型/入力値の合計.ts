// テスト成功
// モック（模倣）関数を定義して、promptとalertの代わりに使用する
let mockPromptValues: (string | null)[] = [];
const mockPrompt = (): string | null => {
  return mockPromptValues.shift() ?? null;
};

let mockAlertCalledWith: number | null = null;
const mockAlert = (value: number): void => {
  mockAlertCalledWith = value;
};

// sumInput関数を修正して、モック関数を使用するようにする
function sumInput(): number {
  let numbers: number[] = [];
  
  while (true) {
    let value: string | null = mockPrompt();
  
    // should we cancel?
    if (value === "" || value === null || !isFinite(+value)) break;
  
    numbers.push(+value);
  }
  
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  
  mockAlert(sum);
  return sum;
}

// テストを実行
function testSumInput(): void {
  mockPromptValues = ["5", "10", "20", ""];
  const result: number = sumInput();
  
  // 合計値を確認
  if (result !== 35) {
    console.error(`Test failed: expected sum to be 35, but got ${result}`);
    return;
  }

  // alertに渡された値を確認
  if (mockAlertCalledWith !== 35) {
    console.error(`Test failed: expected alert to be called with 35, but got ${mockAlertCalledWith}`);
    return;
  }

  console.log("Test passed!");
}

// テスト関数を実行
testSumInput();