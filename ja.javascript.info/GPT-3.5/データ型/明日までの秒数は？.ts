// テスト成功

function getSecondsToTomorrow(): number {
  let now: Date = new Date();

  // 明日の日付
  let tomorrow: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff: number = tomorrow.getTime() - now.getTime(); // 時間の差をミリ秒で取得
  return Math.round(diff / 1000); // 秒に変換して四捨五入
}

const secondsToTomorrow: number = getSecondsToTomorrow();
console.log(`Seconds remaining until tomorrow: ${secondsToTomorrow}`);

// Test code
function testGetSecondsToTomorrow(): void {
  let success: boolean = true;

  // Test if the function returns a number
  const result: number = getSecondsToTomorrow();
  if (typeof result !== "number") {
    console.error("Test failed: getSecondsToTomorrow should return a number");
    success = false;
  }

  // Test if the function returns a positive number
  if (result <= 0) {
    console.error("Test failed: getSecondsToTomorrow should return a positive number");
    success = false;
  }

  // Test if the function returns a number less than or equal to the total number of seconds in a day
  if (result > 24 * 3600) {
    console.error("Test failed: getSecondsToTomorrow should return a number less than or equal to 86400");
    success = false;
  }

  if (success) {
    console.log("All tests passed for getSecondsToTomorrow.");
  }
}

// Run the test
testGetSecondsToTomorrow();