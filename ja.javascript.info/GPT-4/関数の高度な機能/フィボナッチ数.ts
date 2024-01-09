function fib(n: number): number {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 結果を表示
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

// テスト
function testFibFunction() {
  const testCases: [number, number][] = [
    [3, 2],
    [7, 13],
    [77, 5527939700884757],
  ];

  for (let [input, expected] of testCases) {
    const result = fib(input);
    if (result !== expected) {
      console.error(
        `Test failed for input ${input}. Expected ${expected} but got ${result}`
      );
    } else {
      console.log(`Test passed for input ${input}!`);
    }
  }
}

// テストの実行
testFibFunction();
