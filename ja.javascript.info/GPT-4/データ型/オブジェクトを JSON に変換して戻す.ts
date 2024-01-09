interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John Smith",
  age: 35,
};

const user2: User = JSON.parse(JSON.stringify(user));

// テスト
function testUserObjects() {
  console.assert(
    user.name === "John Smith",
    "user.name should be 'John Smith'"
  );
  console.assert(user.age === 35, "user.age should be 35");
  console.assert(
    user2.name === "John Smith",
    "user2.name should be 'John Smith'"
  );
  console.assert(user2.age === 35, "user2.age should be 35");
}

// テストの実行
testUserObjects();
