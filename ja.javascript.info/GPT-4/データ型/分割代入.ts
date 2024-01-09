type UserType = {
  name: string;
  years: number;
  isAdmin?: boolean;
};

let userObj: UserType = {
  name: "John",
  years: 30,
};

let { name: userName, years: userAge, isAdmin = false } = userObj;

// テスト関数
function testDestructuring() {
  if (userName !== "John") {
    console.error(
      `Test failed: Expected name to be "John", but got ${userName}`
    );
  } else if (userAge !== 30) {
    console.error(`Test failed: Expected age to be 30, but got ${userAge}`);
  } else if (isAdmin !== false) {
    console.error(
      `Test failed: Expected isAdmin to be false, but got ${isAdmin}`
    );
  } else {
    console.log("All tests passed for destructuring!");
  }
}

// テストを実行
testDestructuring();
