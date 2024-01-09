function isEmpty(obj: Record<string, any>): boolean {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// テスト
const testCases = [
  { obj: {}, expected: true },
  { obj: { name: "John" }, expected: false },
  { obj: { name: null }, expected: false },
  { obj: { age: 25, country: "USA" }, expected: false },
];

testCases.forEach((testCase, index) => {
  const result = isEmpty(testCase.obj);
  if (result !== testCase.expected) {
    console.error(
      `Test ${index + 1} failed. Expected ${
        testCase.expected
      }, but got ${result}`
    );
  } else {
    console.log(`Test ${index + 1} passed!`);
  }
});
