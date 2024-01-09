type User = {
  name: string;
  age: number;
  surname: string;
};

let users: User[] = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(field: keyof User): (a: User, b: User) => number {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

// テスト
function testByField() {
  users.sort(byField("name"));
  let namesSortedByName = users.map((user) => user.name);
  if (
    JSON.stringify(namesSortedByName) !==
    JSON.stringify(["Ann", "John", "Pete"])
  ) {
    console.error("Test failed: Sorting by name");
  }

  users.sort(byField("age"));
  let namesSortedByAge = users.map((user) => user.name);
  if (
    JSON.stringify(namesSortedByAge) !== JSON.stringify(["Pete", "Ann", "John"])
  ) {
    console.error("Test failed: Sorting by age");
  }

  console.log("All tests passed!");
}

testByField();
