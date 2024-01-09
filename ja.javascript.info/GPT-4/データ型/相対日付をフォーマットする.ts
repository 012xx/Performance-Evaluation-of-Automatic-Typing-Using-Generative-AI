function formatDate(date: Date): string {
  const diff = new Date().getTime() - date.getTime(); // ミリ秒での差

  if (diff < 1000) {
    // 1秒未満
    return "right now";
  }

  let sec = Math.floor(diff / 1000); // 差分を秒に変換

  if (sec < 60) {
    return sec + " sec. ago";
  }

  let min = Math.floor(diff / 60000); // 差分を分に変換
  if (min < 60) {
    return min + " min. ago";
  }

  // 日付のフォーマット
  let d: (string | number)[] = [
    "0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    "" + date.getFullYear(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map((component) => component.toString().slice(-2)); // すべてのコンポーネントの最後の2桁を取る

  // コンポーネントを日付に連結
  return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
}

// テスト
function testFormatDate() {
  console.log(formatDate(new Date(Date.now() - 1))); // "right now"
  console.log(formatDate(new Date(Date.now() - 30 * 1000))); // "30 sec. ago"
  console.log(formatDate(new Date(Date.now() - 5 * 60 * 1000))); // "5 min. ago"
  console.log(formatDate(new Date(Date.now() - 86400 * 1000))); // yesterday's date like 02.10.2022, 20:00 (this example will vary based on when you run it)
}

// テストの実行
testFormatDate();
