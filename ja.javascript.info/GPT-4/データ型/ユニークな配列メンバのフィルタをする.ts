function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// テスト関数
function testUnique() {
  const stringData = ["a", "b", "a", "c", "b", "d"];
  const numberData = [1, 2, 3, 2, 1, 4];

  const expectedStringResult = ["a", "b", "c", "d"];
  const expectedNumberResult = [1, 2, 3, 4];

  const stringResult = unique(stringData);
  const numberResult = unique(numberData);

  if (JSON.stringify(stringResult) !== JSON.stringify(expectedStringResult)) {
    console.error(
      `Test for strings failed: Expected ${JSON.stringify(
        expectedStringResult
      )} but got ${JSON.stringify(stringResult)}`
    );
  } else {
    console.log("Test for strings passed!");
  }

  if (JSON.stringify(numberResult) !== JSON.stringify(expectedNumberResult)) {
    console.error(
      `Test for numbers failed: Expected ${JSON.stringify(
        expectedNumberResult
      )} but got ${JSON.stringify(numberResult)}`
    );
  } else {
    console.log("Test for numbers passed!");
  }
}

// テストを実行
testUnique();
