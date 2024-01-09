function min(a: number, b: number): number {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// テスト
const testCases = [
  { a: 5, b: 3, expected: 3 },
  { a: -5, b: 3, expected: -5 },
  { a: 0, b: 0, expected: 0 },
  { a: 7.5, b: 7.6, expected: 7.5 },
];

testCases.forEach((testCase, index) => {
  const result = min(testCase.a, testCase.b);
  if (result !== testCase.expected) {
    console.error(
      `Test ${index + 1} failed. Expected ${
        testCase.expected
      }, but got ${result}`
    );
  } else {
    console.log(`Test ${index + 1} passed!`);
  }
});
