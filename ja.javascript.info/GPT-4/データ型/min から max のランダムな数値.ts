function random(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

// 実際の関数の使用
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// テスト関数
function testRandom() {
  const iterations = 1000;
  let failed = false;

  for (let i = 0; i < iterations; i++) {
    const result = random(1, 5);

    if (result < 1 || result > 5) {
      console.error(`Test failed: Generated number ${result} is out of range.`);
      failed = true;
      break;
    }
  }

  if (!failed) {
    console.log("All tests passed!");
  }
}

// テストを実行
testRandom();
