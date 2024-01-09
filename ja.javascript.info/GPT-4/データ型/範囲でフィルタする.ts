function filterRange(arr: number[], a: number, b: number): number[] {
  return arr.filter((item) => a <= item && item <= b);
}

// テスト関数
function testFilterRange() {
  const testCases = [
    { input: [[1, 2, 3, 4, 5, 6, 7], 3, 5], expected: [3, 4, 5] },
    { input: [[10, 20, 30, 40, 50], 25, 45], expected: [30, 40] },
    { input: [[-10, -5, 0, 5, 10], -7, 7], expected: [-5, 0, 5] },
  ];

  for (let testCase of testCases) {
    const result = filterRange(...testCase.input);
    if (JSON.stringify(result) !== JSON.stringify(testCase.expected)) {
      console.error(
        `For input ${JSON.stringify(testCase.input)}, expected ${JSON.stringify(
          testCase.expected
        )} but got ${JSON.stringify(result)}`
      );
    } else {
      console.log(`Test passed for input ${JSON.stringify(testCase.input)}`);
    }
  }
}

// テストを実行
testFilterRange();
