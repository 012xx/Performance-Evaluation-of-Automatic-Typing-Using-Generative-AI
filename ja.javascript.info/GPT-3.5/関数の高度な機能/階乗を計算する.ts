// テスト成功

function factorial(n: number): number {
  return n !== 1 ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120

// テスト関数
function testFactorial(): void {
  let testPassed = true;

  // テストケース1: n = 1 (1! = 1)
  if (factorial(1) !== 1) {
    console.error("Test failed: factorial(1) should be 1.");
    testPassed = false;
  }

  // テストケース2: n = 5 (5! = 5 x 4 x 3 x 2 x 1 = 120)
  if (factorial(5) !== 120) {
    console.error("Test failed: factorial(5) should be 120.");
    testPassed = false;
  }

  // テストケース3: n = 7 (7! = 7 x 6 x 5 x 4 x 3 x 2 x 1 = 5040)
  if (factorial(7) !== 5040) {
    console.error("Test failed: factorial(7) should be 5040.");
    testPassed = false;
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を呼び出す
testFactorial();
