// テスト成功

function fib(n: number): number {
  let a: number = 1;
  let b: number = 1;
  for (let i: number = 3; i <= n; i++) {
    let c: number = a + b;
    a = b;
    b = c;
  }
  return b;
}

// テスト関数
function testFib(): void {
  let testPassed: boolean = true;

  // テストケース1: fib(3) should be 2
  if (fib(3) !== 2) {
    console.error("Test failed: fib(3) should be 2.");
    testPassed = false;
  }

  // テストケース2: fib(7) should be 13
  if (fib(7) !== 13) {
    console.error("Test failed: fib(7) should be 13.");
    testPassed = false;
  }

  // テストケース3: fib(77) should be 5527939700884757
  if (fib(77) !== 5527939700884757) {
    console.error("Test failed: fib(77) should be 5527939700884757.");
    testPassed = false;
  }

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// テスト関数を呼び出す
testFib();
