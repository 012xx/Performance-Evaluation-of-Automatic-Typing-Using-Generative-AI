function sumTo(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));

// テスト
function testSumTo() {
  const result = sumTo(100);
  const expected = 5050; // 1 + 2 + ... + 100 = 5050
  console.assert(
    result === expected,
    `Expected ${expected}, but got ${result}`
  );
}

// テストの実行
testSumTo();
