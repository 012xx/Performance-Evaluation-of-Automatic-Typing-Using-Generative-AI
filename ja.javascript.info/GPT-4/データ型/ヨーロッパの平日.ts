function getLocalDay(date: Date): number {
  let day = date.getDay();

  if (day == 0) {
    // 0 becomes 7
    day = 7;
  }

  return day;
}

// テスト関数
function testGetLocalDay() {
  const testDate = new Date(2012, 0, 3); // 2012年1月3日は火曜日
  const result = getLocalDay(testDate);

  if (result !== 2) {
    console.error(`Test failed: Expected 2 but got ${result}`);
  } else {
    console.log("getLocalDay test passed!");
  }
}

// テストの実行
testGetLocalDay();
