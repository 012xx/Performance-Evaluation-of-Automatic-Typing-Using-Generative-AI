function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}

// テスト関数
function testExtractCurrencyValue() {
  const tests = [
    { input: "$120", expected: 120 },
    { input: "€50", expected: 50 },
    { input: "£300", expected: 300 },
  ];

  for (let test of tests) {
    const result = extractCurrencyValue(test.input);
    if (result !== test.expected) {
      console.error(
        `Test failed for input "${test.input}". Expected ${test.expected}, but got ${result}`
      );
    } else {
      console.log(`Test passed for input "${test.input}"`);
    }
  }
}

// テストを実行
testExtractCurrencyValue();
