// テスト成功

function sum(a: number): (b: number) => number {
  return function (b: number): number {
    return a + b; // レキシカル環境から "a" を取得
  };
}

const result1 = sum(1)(2);
console.log(result1); // 3

const result2 = sum(5)(-1);
console.log(result2); // 4

// テストコード
function testSum(): void {
  let testPassed = true;

  if (sum(1)(2) !== 3) {
    console.error("Test failed: sum(1)(2) should return 3");
    testPassed = false;
  }

  if (sum(5)(-1) !== 4) {
    console.error("Test failed: sum(5)(-1) should return 4");
    testPassed = false;
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を実行
testSum();
