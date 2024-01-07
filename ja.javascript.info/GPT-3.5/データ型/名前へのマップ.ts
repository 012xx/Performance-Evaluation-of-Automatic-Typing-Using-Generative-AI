// テスト成功

interface User {
  name: string;
  age: number;
}

let john: User = { name: "John", age: 25 };
let pete: User = { name: "Pete", age: 30 };
let mary: User = { name: "Mary", age: 28 };

let users: User[] = [john, pete, mary];

let names: string[] = users.map(item => item.name);

// Test Code
function testNamesMapping(users: User[], expectedNames: string[]): void {
  const actualNames = users.map(item => item.name);

  if (JSON.stringify(actualNames) === JSON.stringify(expectedNames)) {
    console.log("Test passed: Names are correctly mapped.");
  } else {
    console.error(`Test failed: Expected ${expectedNames}, but got ${actualNames}`);
  }
}

// Run the test
testNamesMapping(users, ["John", "Pete", "Mary"]);