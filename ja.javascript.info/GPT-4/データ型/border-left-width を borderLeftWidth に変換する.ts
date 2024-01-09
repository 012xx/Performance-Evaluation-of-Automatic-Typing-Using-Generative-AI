function camelize(str: string): string {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// テスト関数
function testCamelize() {
  const testCases = [
    { input: "my-long-word", expected: "myLongWord" },
    { input: "background-color", expected: "backgroundColor" },
    { input: "list-style-image", expected: "listStyleImage" },
    { input: "font-size", expected: "fontSize" },
  ];

  for (let testCase of testCases) {
    const result = camelize(testCase.input);
    if (result !== testCase.expected) {
      console.error(
        `For input "${testCase.input}", expected "${testCase.expected}" but got "${result}"`
      );
    } else {
      console.log(`Test passed for input "${testCase.input}"`);
    }
  }
}

// テストを実行
testCamelize();
