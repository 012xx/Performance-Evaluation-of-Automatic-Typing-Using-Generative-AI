function filterRangeInPlace(arr: number[], a: number, b: number): void {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// テスト関数
function testFilterRangeInPlace() {
  const testCases = [
    { input: [1, 2, 3, 4, 5, 6, 7], a: 3, b: 5, expected: [3, 4, 5] },
    { input: [10, 20, 30, 40, 50], a: 25, b: 45, expected: [30, 40] },
    { input: [-10, -5, 0, 5, 10], a: -7, b: 7, expected: [-5, 0, 5] },
  ];

  for (let testCase of testCases) {
    filterRangeInPlace(testCase.input, testCase.a, testCase.b);
    if (JSON.stringify(testCase.input) !== JSON.stringify(testCase.expected)) {
      console.error(
        `For input range [${testCase.a}, ${
          testCase.b
        }], expected ${JSON.stringify(
          testCase.expected
        )} but got ${JSON.stringify(testCase.input)}`
      );
    } else {
      console.log(`Test passed for input range [${testCase.a}, ${testCase.b}]`);
    }
  }
}

// テストを実行
testFilterRangeInPlace();
