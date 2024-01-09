// テスト成功

interface User {
  name: string;
  age: number;
  surname: string;
}

let users: User[] = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field: keyof User) {
  return (a: User, b: User) => (a[field] > b[field] ? 1 : -1);
}

// テストを行う関数
function testByField() {
  // テスト用のデータ
  let testUsers: User[] = [
    { name: "Bob", age: 25, surname: "Brown" },
    { name: "Alice", age: 22, surname: "Allison" },
    { name: "Eve", age: 30, surname: "Evans" },
  ];

  // nameでソート
  testUsers.sort(byField("name"));
  let names = testUsers.map((u) => u.name);
  if (names.join(", ") !== "Alice, Bob, Eve") {
    console.error(
      `Failed: Expected "Alice, Bob, Eve" but got ${names.join(", ")}`
    );
    return;
  }

  // ageでソート
  testUsers.sort(byField("age"));
  names = testUsers.map((u) => u.name);
  if (names.join(", ") !== "Alice, Bob, Eve") {
    console.error(
      `Failed: Expected "Alice, Bob, Eve" but got ${names.join(", ")}`
    );
    return;
  }

  // surnameでソート
  testUsers.sort(byField("surname"));
  names = testUsers.map((u) => u.surname);
  if (names.join(", ") !== "Allison, Brown, Evans") {
    console.error(
      `Failed: Expected "Allison, Brown, Evans" but got ${names.join(", ")}`
    );
    return;
  }

  console.log("All tests passed!");
}

// テストを実行
testByField();
