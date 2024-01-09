function getWeekDay(date: Date): string {
  let days: string[] = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

// テスト関数
function testGetWeekDay() {
  const testDate = new Date(2023, 9, 5); // 2023年10月5日は木曜日
  const result = getWeekDay(testDate);

  if (result !== "TH") {
    console.error(`Test failed: Expected TH but got ${result}`);
  } else {
    console.log("getWeekDay test passed!");
  }
}

// テストの実行
testGetWeekDay();
