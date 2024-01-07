// テスト成功

function getDateAgo(date: Date, days: number): number {
  let dateCopy: Date = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

const date: Date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// Test code
function testGetDateAgo() {
  let success: boolean = true;

  const testDate: Date = new Date(2015, 0, 2); // 2 Jan 2015

  if (getDateAgo(testDate, 1) !== 1) {
    console.error("Test failed: 1 day ago should be 1 (1 Jan 2015)");
    success = false;
  }

  if (getDateAgo(testDate, 2) !== 31) {
    console.error("Test failed: 2 days ago should be 31 (31 Dec 2014)");
    success = false;
  }

  if (getDateAgo(testDate, 365) !== 2) {
    console.error("Test failed: 365 days ago should be 2 (2 Jan 2014)");
    success = false;
  }

  if (success) {
    console.log("All tests passed for getDateAgo.");
  }
}

// Run the test
testGetDateAgo();