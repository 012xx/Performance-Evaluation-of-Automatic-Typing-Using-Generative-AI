function sumInput(): number {
  let numbers: number[] = [];

  while (true) {
    let value = prompt("A number please?", "0");

    // should we cancel?
    if (value === "" || value === null || !isFinite(+value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());

// テスト関数
function testSumInput() {
  // Mock the prompt function to simulate user input
  const originalPrompt = prompt;

  // Sample scenario: user enters 5, 10, and then cancels the prompt
  const inputs = ["5", "10", null];
  let callCount = 0;

  (window as any).prompt = (message: string) => {
    return inputs[callCount++];
  };

  const result = sumInput();

  if (result !== 15) {
    console.error(`Test failed. Expected the sum to be 15, but got ${result}`);
  } else {
    console.log("Test passed!");
  }

  // Restore the original prompt function
  (window as any).prompt = originalPrompt;
}

// テストを実行
testSumInput();
