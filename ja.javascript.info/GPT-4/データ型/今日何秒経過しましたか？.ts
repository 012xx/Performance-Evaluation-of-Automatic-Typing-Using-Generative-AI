function getSecondsToday(): number {
  let now = new Date();

  // 現在の 日/月/年を使ってオブジェクトを作成
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now.getTime() - today.getTime(); // ms difference
  return Math.round(diff / 1000); // 秒を作る
}

// テスト関数
function testGetSecondsToday() {
  const result = getSecondsToday();
  const date = new Date();
  const expected =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();

  if (result >= 0 && result <= 86400 && result === expected) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed. Expected around ${expected} but got ${result}`);
  }
}

// テストの実行
testGetSecondsToday();
