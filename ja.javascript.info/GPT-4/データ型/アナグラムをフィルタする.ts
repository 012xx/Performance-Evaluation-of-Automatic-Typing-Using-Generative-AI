function aclean(arr: string[]): string[] {
  let obj: { [key: string]: string } = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Array.from(Object.values(obj));
}

// テスト関数
function testAclean() {
  const input = [
    "nap",
    "teachers",
    "cheaters",
    "PAN",
    "ear",
    "era",
    "hectares",
  ];
  const result = aclean(input);

  if (result.length !== 3) {
    console.error(
      `Test failed: Expected result length to be 3 but got ${result.length}`
    );
    return;
  }

  // Expected results (order may vary, but contents should match)
  const expectedResults = ["hectares", "PAN", "era"];
  for (const word of expectedResults) {
    if (!result.includes(word)) {
      console.error(
        `Test failed: Expected word "${word}" not found in result.`
      );
      return;
    }
  }

  console.log("Test passed!");
}

// テストを実行
testAclean();
