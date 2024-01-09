type User = {
  name: string;
  age: number;
};

function getAverageAge(users: User[]): number {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

const john: User = { name: "John", age: 25 };
const pete: User = { name: "Pete", age: 30 };
const mary: User = { name: "Mary", age: 29 };

const arr: User[] = [john, pete, mary];

alert(getAverageAge(arr)); // 28

// テスト関数
function testGetAverageAge() {
  const result = getAverageAge(arr);
  if (result !== 28) {
    console.error(
      `Test failed: Expected average age to be 28 but got ${result}`
    );
  } else {
    console.log("Test passed for getAverageAge function!");
  }
}

// テストを実行
testGetAverageAge();
