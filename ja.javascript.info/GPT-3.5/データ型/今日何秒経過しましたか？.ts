// テスト成功

function getSecondsToday(): number {
  let d: Date = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

// Test code
function testGetSecondsToday(): void {
  let success: boolean = true;

  // Test if the function returns a number
  const result: number = getSecondsToday();
  if (typeof result !== "number") {
    console.error("Test failed: getSecondsToday should return a number");
    success = false;
  }

  // Test if the function returns a positive number
  if (result < 0) {
    console.error("Test failed: getSecondsToday should return a positive number");
    success = false;
  }

  // Test if the function returns a number less than or equal to the total number of seconds in a day
  if (result > 24 * 3600) {
    console.error("Test failed: getSecondsToday should return a number less than or equal to 86400");
    success = false;
  }

  if (success) {
    console.log("All tests passed for getSecondsToday.");
  }
}

const secondsToday: number = getSecondsToday();
console.log(`Seconds elapsed today: ${secondsToday}`);

// Run the test
testGetSecondsToday();