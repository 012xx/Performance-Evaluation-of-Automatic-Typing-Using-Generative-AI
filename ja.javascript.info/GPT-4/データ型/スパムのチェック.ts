function checkSpam(str: string): boolean {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

// テスト関数
function testCheckSpam() {
  const tests = [
    { input: "buy ViAgRA now", expected: true },
    { input: "free xxxxx", expected: true },
    { input: "innocent rabbit", expected: false },
  ];

  for (let test of tests) {
    const result = checkSpam(test.input);
    if (result !== test.expected) {
      console.error(
        `Test failed for input "${test.input}". Expected ${test.expected}, but got ${result}`
      );
    } else {
      console.log(`Test passed for input "${test.input}"`);
    }
  }
}

// テスト実行
testCheckSpam();

// 以下はオリジナルのコードに含まれていたアラートです
alert(checkSpam("buy ViAgRA now")); // true
alert(checkSpam("free xxxxx")); // true
alert(checkSpam("innocent rabbit")); // false
