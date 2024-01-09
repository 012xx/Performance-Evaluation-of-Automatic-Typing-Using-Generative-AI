type ObjectType = {};

let obj: ObjectType = {};

function A(): ObjectType {
  return obj;
}

function B(): ObjectType {
  return obj;
}

// テスト用の関数
function runTests() {
  const resultA = A();
  const resultB = B();

  if (resultA === resultB) {
    console.log("Test passed! A() and B() return the same object.");
  } else {
    console.error("Test failed! A() and B() return different objects.");
  }
}

// テストを実行
runTests();
