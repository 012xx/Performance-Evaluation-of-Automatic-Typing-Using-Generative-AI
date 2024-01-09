function count(obj: object): number {
  return Object.keys(obj).length;
}

// テスト関数
function testCount() {
  const testObj = {
    John: 1000,
    Pete: 1500,
    Mary: 800,
  };

  const result = count(testObj);
  if (result !== 3) {
    console.error(
      `Test failed: Expected count of object properties to be 3, but got ${result}`
    );
    return;
  }

  console.log("Test passed for count function!");
}

// テストを実行
testCount();
