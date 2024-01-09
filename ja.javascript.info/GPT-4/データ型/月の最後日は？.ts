function getLastDayOfMonth(year: number, month: number): number {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// テスト関数
function testGetLastDayOfMonth() {
  const tests = [
    { year: 2012, month: 0, expected: 31 },
    { year: 2012, month: 1, expected: 29 },
    { year: 2013, month: 1, expected: 28 },
  ];

  for (const test of tests) {
    const result = getLastDayOfMonth(test.year, test.month);
    if (result !== test.expected) {
      console.error(
        `Test for year ${test.year} and month ${test.month} failed. Expected ${test.expected} but got ${result}`
      );
    } else {
      console.log(`Test for year ${test.year} and month ${test.month} passed!`);
    }
  }
}

// テストの実行
testGetLastDayOfMonth();
