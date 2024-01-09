function unique(arr: string[]): string[] {
  let result: string[] = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const strings: string[] = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O

// テスト関数
function testUnique() {
  const testArr: string[] = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  const result = unique(testArr);
  const expectedOutput: string[] = ["Hare", "Krishna", ":-O"];

  if (JSON.stringify(result) !== JSON.stringify(expectedOutput)) {
    console.error(
      `Test failed: Expected ${JSON.stringify(
        expectedOutput
      )} but got ${JSON.stringify(result)}`
    );
  } else {
    console.log("Test passed for unique function!");
  }
}

// テストを実行
testUnique();
