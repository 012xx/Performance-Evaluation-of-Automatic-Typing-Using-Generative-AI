interface ArrayItem {
  id: string;
  [key: string]: any; // その他の任意のプロパティを許可
}

function groupById(array: ArrayItem[]): { [key: string]: ArrayItem } {
  return array.reduce<{ [key: string]: ArrayItem }>((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

// テスト用のデータ
const testData: ArrayItem[] = [
  { id: "123", name: "John" },
  { id: "456", age: 30 },
  { id: "789", country: "US" },
];

// テスト関数
function testGroupById() {
  const result = groupById(testData);
  const expectedOutput = {
    "123": { id: "123", name: "John" },
    "456": { id: "456", age: 30 },
    "789": { id: "789", country: "US" },
  };

  if (JSON.stringify(result) !== JSON.stringify(expectedOutput)) {
    console.error(
      `Test failed: Expected ${JSON.stringify(
        expectedOutput
      )} but got ${JSON.stringify(result)}`
    );
  } else {
    console.log("Test passed for groupById function!");
  }
}

// テストを実行
testGroupById();
