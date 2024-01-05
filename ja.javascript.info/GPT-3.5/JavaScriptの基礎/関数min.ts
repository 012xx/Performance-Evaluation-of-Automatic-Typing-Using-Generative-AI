function show(a: number, b: number): number {
  function min(a: number, b: number): number {
    return a < b ? a : b;
  }

  return min(a, b);
}

// テスト関数
function testShowFunction(): void {
  const testCases = [
    { a: 1, b: 2, expected: 1 },
    { a: 5, b: 3, expected: 3 },
    { a: 7, b: 7, expected: 7 },
    { a: -1, b: 1, expected: -1 },
    { a: 0, b: 0, expected: 0 },
  ];

  for (const testCase of testCases) {
    const result = show(testCase.a, testCase.b);
    if (result !== testCase.expected) {
      console.error(
        `Test failed for inputs ${testCase.a} and ${testCase.b}. Expected ${testCase.expected}, but got ${result}.`
      );
      return;
    }
  }

  console.log("All tests passed!");
}

testShowFunction();
