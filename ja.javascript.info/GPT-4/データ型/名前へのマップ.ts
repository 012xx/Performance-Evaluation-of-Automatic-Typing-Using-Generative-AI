type User = {
  name: string;
  age: number;
};

const john: User = { name: "John", age: 25 };
const pete: User = { name: "Pete", age: 30 };
const mary: User = { name: "Mary", age: 28 };

const users: User[] = [john, pete, mary];

const names: string[] = users.map((item) => item.name);

alert(names.join(", ")); // John, Pete, Mary

// テスト関数
function testUsersNames() {
  if (names.length !== 3) {
    console.error("Test failed: Expected names array to have 3 items");
    return;
  }
  if (names[0] !== "John" || names[1] !== "Pete" || names[2] !== "Mary") {
    console.error(
      `Test failed: Expected "John, Pete, Mary" but got "${names.join(", ")}"`
    );
  } else {
    console.log("Test passed for user names!");
  }
}

// テストを実行
testUsersNames();
