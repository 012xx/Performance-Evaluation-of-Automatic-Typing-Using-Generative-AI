// テスト成功

function getLocalDay(date: Date): number {
  let day: number = date.getDay();

  if (day === 0) { // weekday 0 (sunday) is 7 in European
    day = 7;
  }

  return day;
}

const date: Date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getLocalDay(date));

// Test code
function testGetLocalDay() {
  let success: boolean = true;

  let testDate: Date = new Date(2012, 0, 1);  // 1 Jan 2012, should be 7 (Sunday)
  if (getLocalDay(testDate) !== 7) {
    console.error("Test failed: 1 Jan 2012 should be 7 (Sunday)");
    success = false;
  }

  testDate = new Date(2012, 0, 2);  // 2 Jan 2012, should be 1 (Monday)
  if (getLocalDay(testDate) !== 1) {
    console.error("Test failed: 2 Jan 2012 should be 1 (Monday)");
    success = false;
  }

  testDate = new Date(2012, 0, 7);  // 7 Jan 2012, should be 6 (Saturday)
  if (getLocalDay(testDate) !== 6) {
    console.error("Test failed: 7 Jan 2012 should be 6 (Saturday)");
    success = false;
  }

  if (success) {
    console.log("All tests passed for getLocalDay.");
  }
}

// Run the test
testGetLocalDay();