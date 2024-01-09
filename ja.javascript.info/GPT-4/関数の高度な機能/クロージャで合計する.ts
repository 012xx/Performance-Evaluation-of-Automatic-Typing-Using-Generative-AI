function sum(a: number): (b: number) => number {
  return function (b: number): number {
    return a + b; // 外部のレキシカル環境から "a" を取る
  };
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4

// テスト
function testSum() {
  let result1 = sum(1)(2);
  let result2 = sum(5)(-1);

  if (result1 === 3 && result2 === 4) {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected 3 and 4 but got ${result1} and ${result2}`
    );
  }
}

testSum();
