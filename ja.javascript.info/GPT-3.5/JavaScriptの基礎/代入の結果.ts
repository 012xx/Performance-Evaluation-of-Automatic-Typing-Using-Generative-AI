// テスト成功

function testVariablesAndOperations() {
  let a = 2;
  let x = 1 + (a *= 2);

  // a の値と型を確認
  if (a !== 4 || typeof a !== "number") {
    console.error(
      `Test failed: Expected a to be 4 and of type number, but got ${a} and type ${typeof a}`
    );
    return;
  }

  // x の値と型を確認
  if (x !== 5 || typeof x !== "number") {
    console.error(
      `Test failed: Expected x to be 5 and of type number, but got ${x} and type ${typeof x}`
    );
    return;
  }

  console.log("テストが成功しました！");
}

testVariablesAndOperations();
