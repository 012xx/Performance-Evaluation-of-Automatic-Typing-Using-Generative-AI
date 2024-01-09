function truncate(str: string, maxlength: number): string {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

// テスト関数
function testTruncate() {
  const tests = [
    { input: { str: "Hello, world!", maxlength: 10 }, expected: "Hello, wor…" },
    { input: { str: "Hello", maxlength: 10 }, expected: "Hello" },
    { input: { str: "Hi", maxlength: 1 }, expected: "H…" },
  ];

  for (let test of tests) {
    const result = truncate(test.input.str, test.input.maxlength);
    if (result !== test.expected) {
      console.error(
        `Test failed for input "${test.input.str}" with maxlength ${test.input.maxlength}. Expected "${test.expected}", but got "${result}"`
      );
    } else {
      console.log(
        `Test passed for input "${test.input.str}" with maxlength ${test.input.maxlength}`
      );
    }
  }
}

// テストを実行
testTruncate();
