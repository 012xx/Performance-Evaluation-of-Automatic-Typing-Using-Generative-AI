// テスト成功

interface User {
  name: string;
  age: number;
}

// オリジナルのユーザーオブジェクト
let user: User = {
  name: "John Smith",
  age: 35,
};

// ディープコピーを作成
let user2: User = JSON.parse(JSON.stringify(user));

// user2 の内容を確認
console.log(user2);

// テストコード
function testDeepClone() {
  let success: boolean = true;

  // Test if user2 is a different object from user
  if (user === user2) {
    console.error('Test failed: user2 should be a different object from user.');
    success = false;
  }

  // Test if user2 has the same properties as user
  if (user.name !== user2.name || user.age !== user2.age) {
    console.error('Test failed: user2 should have the same properties as user.');
    success = false;
  }

  // Test if modifying user2 doesn't affect user
  user2.name = "Jane Smith";
  user2.age = 40;
  if (user.name !== "John Smith" || user.age !== 35) {
    console.error('Test failed: Modifying user2 should not affect user.');
    success = false;
  }

  if (success) {
    console.log("All tests passed for deep cloning.");
  }
}

// Run the test
testDeepClone();