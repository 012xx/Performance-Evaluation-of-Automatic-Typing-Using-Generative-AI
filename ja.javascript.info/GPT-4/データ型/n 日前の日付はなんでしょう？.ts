function getDateAgo(date: Date, days: number): number {
  let copiedDate = new Date(date);
  copiedDate.setDate(copiedDate.getDate() - days);
  return copiedDate.getDate();
}

// テスト関数
function testGetDateAgo() {
  const testDate = new Date(2022, 4, 15); // 2022年5月15日
  const result = getDateAgo(testDate, 10);

  if (result !== 5) {
    console.error(`Test failed: Expected 5 but got ${result}`);
  } else {
    console.log("getDateAgo test passed!");
  }
}

// テストの実行
testGetDateAgo();
