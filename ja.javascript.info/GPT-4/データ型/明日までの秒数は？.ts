function getSecondsToTomorrow(): number {
  const now = new Date();

  // 明日の日付
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  const diff = tomorrow.getTime() - now.getTime(); // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}

// テスト関数
function testGetSecondsToTomorrow() {
  const result = getSecondsToTomorrow();
  const secondsInDay = 24 * 60 * 60;

  // 結果は0秒から86400秒(1日)の間でなければなりません
  if (result >= 0 && result <= secondsInDay) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed. Value out of range: ${result}`);
  }

  // 別の方法での計算
  const now = new Date();
  const expected =
    secondsInDay -
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds());
  if (Math.abs(expected - result) < 2) {
    // 2秒の誤差を許容
    console.log("Test for matching seconds passed!");
  } else {
    console.error(
      `Test for matching seconds failed. Expected ${expected} but got ${result}`
    );
  }
}

// テストの実行
testGetSecondsToTomorrow();
