// テスト成功

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));

// テスト関数
function testSumTo() {
  let testPassed = true;

  // テストケース1: n = 1
  if (sumTo(1) !== 1) {
    console.error("Test failed: sumTo(1) should be 1.");
    testPassed = false;
  }

  // テストケース2: n = 5 (1 + 2 + 3 + 4 + 5 = 15)
  if (sumTo(5) !== 15) {
    console.error("Test failed: sumTo(5) should be 15.");
    testPassed = false;
  }

  // テストケース3: n = 100 (1 + 2 + ... + 100 = 5050)
  if (sumTo(100) !== 5050) {
    console.error("Test failed: sumTo(100) should be 5050.");
    testPassed = false;
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を呼び出す
testSumTo();
