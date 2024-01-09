let a: number = 2;
let x: number = 1 + (a *= 2);

// テスト用のコード
function testCalculation() {
  try {
    if (a !== 4) {
      console.error(`Expected a to be 4, but got ${a}`);
    }

    if (x !== 5) {
      console.error(`Expected x to be 5, but got ${x}`);
    }

    if (a === 4 && x === 5) {
      console.log("全てのテストが成功しました！");
    }
  } catch (error) {
    console.error("テストが失敗しました:", error);
  }
}

testCalculation();
