// テスト成功

// 既存のコード
function getWeekDay(date: Date): string {
  const days: string[] = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}

const date: Date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date));

// テストコード
function testGetWeekDay() {
  let success: boolean = true;

  let testDate: Date = new Date(2012, 0, 1);  // 1 Jan 2012, should be Sunday (SU)
  if (getWeekDay(testDate) !== 'SU') {
    console.error("1 Jan 2012 should be SU");
    success = false;
  }

  testDate = new Date(2012, 0, 2);  // 2 Jan 2012, should be Monday (MO)
  if (getWeekDay(testDate) !== 'MO') {
    console.error("2 Jan 2012 should be MO");
    success = false;
  }

  testDate = new Date(2012, 0, 3);  // 3 Jan 2012, should be Tuesday (TU)
  if (getWeekDay(testDate) !== 'TU') {
    console.error("3 Jan 2012 should be TU");
    success = false;
  }

  testDate = new Date(2012, 0, 7);  // 7 Jan 2012, should be Saturday (SA)
  if (getWeekDay(testDate) !== 'SA') {
    console.error("7 Jan 2012 should be SA");
    success = false;
  }

  if (success) {
    console.log("All getWeekDay tests passed.");
  }
}

// テストを実行
testGetWeekDay();