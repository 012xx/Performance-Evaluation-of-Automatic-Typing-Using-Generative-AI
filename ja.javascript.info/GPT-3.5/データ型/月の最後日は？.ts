// テスト成功

function getLastDayOfMonth(year: number, month: number): number {
  let date: Date = new Date(year, month + 1, 0);
  return date.getDate();
}

const year: number = 2023; // 例として年を指定
const month: number = 8; // 例として月を指定 (0-indexed, 8 は 9 月を表す)

const lastDay: number = getLastDayOfMonth(year, month);
console.log(`Last day of ${month + 1}/${year}: ${lastDay}`);

// Test code
function testGetLastDayOfMonth() {
  let success: boolean = true;

  if (getLastDayOfMonth(2022, 0) !== 31) {  // January has 31 days
    console.error("Test failed: January 2022 should have 31 days");
    success = false;
  }

  if (getLastDayOfMonth(2022, 1) !== 28) {  // February (non-leap year) has 28 days
    console.error("Test failed: February 2022 should have 28 days");
    success = false;
  }

  if (getLastDayOfMonth(2020, 1) !== 29) {  // February (leap year) has 29 days
    console.error("Test failed: February 2020 should have 29 days");
    success = false;
  }

  if (getLastDayOfMonth(2022, 11) !== 31) {  // December has 31 days
    console.error("Test failed: December 2022 should have 31 days");
    success = false;
  }

  if (success) {
    console.log("All tests passed for getLastDayOfMonth.");
  }
}

// Run the test
testGetLastDayOfMonth();