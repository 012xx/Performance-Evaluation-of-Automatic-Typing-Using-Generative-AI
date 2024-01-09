function factorial(n: number): number {
  return n !== 1 ? n * factorial(n - 1) : 1;
}

// 結果を表示
alert(factorial(5)); // 120

// テスト
function testFactorialFunction() {
  const testValue = 5;
  const expectedResult = 120;
  const result = factorial(testValue);

  if (result !== expectedResult) {
    console.error(`Test failed. Expected ${expectedResult} but got ${result}`);
  } else {
    console.log("Test passed!");
  }
}

// テストの実行
testFactorialFunction();
