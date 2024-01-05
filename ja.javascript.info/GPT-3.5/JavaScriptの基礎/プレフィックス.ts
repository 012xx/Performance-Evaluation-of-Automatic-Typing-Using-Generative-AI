// テスト成功

function testVariablesAndTypes() {
  let a: number = 1,
    b: number = 1;

  let c: number = ++a;
  let d: number = b++;

  // a の値と型を確認
  if (a !== 2 || typeof a !== "number") {
    console.error(
      `Test failed: Expected a to be 2 and of type number, but got ${a} and type ${typeof a}`
    );
    return;
  }

  // b の値と型を確認
  if (b !== 2 || typeof b !== "number") {
    console.error(
      `Test failed: Expected b to be 2 and of type number, but got ${b} and type ${typeof b}`
    );
    return;
  }

  // c の値と型を確認
  if (c !== 2 || typeof c !== "number") {
    console.error(
      `Test failed: Expected c to be 2 and of type number, but got ${c} and type ${typeof c}`
    );
    return;
  }

  // d の値と型を確認
  if (d !== 1 || typeof d !== "number") {
    console.error(
      `Test failed: Expected d to be 1 and of type number, but got ${d} and type ${typeof d}`
    );
    return;
  }

  console.log("テストが成功しました！");
}

testVariablesAndTypes();
