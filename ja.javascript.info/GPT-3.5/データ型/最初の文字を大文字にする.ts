// テスト失敗（Anyのまま）

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function testUcFirst(): void {
  try {
    const test1: string = ucFirst("john");
    const test2: string = ucFirst("jane");
    const test3: string = ucFirst("hello world");
    const test4: string = ucFirst("");

    if (test1 !== "John") throw new Error("Failed: 'john' should be converted to 'John'");
    if (test2 !== "Jane") throw new Error("Failed: 'jane' should be converted to 'Jane'");
    if (test3 !== "Hello world") throw new Error("Failed: 'hello world' should be converted to 'Hello world'");
    if (test4 !== "") throw new Error("Failed: An empty string should return an empty string");

    console.log("All tests passed.");
  } catch (error) {
    console.error("Some tests failed", error);
  }
}

// テスト関数を呼び出す
testUcFirst();