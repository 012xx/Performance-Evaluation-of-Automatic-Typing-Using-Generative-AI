// テスト成功

// random関数の定義
function random(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

// テストコード
function runTests(): void {
  let withinRange: boolean = true;
  const min: number = 1;
  const max: number = 5;

  // 100回繰り返して、全てのランダム値が範囲内にあるか確認する
  for (let i = 0; i < 100; i++) {
    const result: number = random(min, max);
    if (result < min || result >= max) {
      withinRange = false;
      break;
    }
  }

  if (withinRange) {
    console.log("Test passed!");
  } else {
    console.log("Test failed.");
  }
}

// テストの実行
runTests();