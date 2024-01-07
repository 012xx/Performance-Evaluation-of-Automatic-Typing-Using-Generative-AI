// テスト成功

// Your original code
type User = {
  name: string;
  age: number;
};

function count(obj: User): number {
  return Object.keys(obj).length;
}

const user: User = {
  name: 'John',
  age: 30,
};

alert(count(user)); // 2

// Test Cases
function testCount() {
  // Test case 1: Count of properties should be 2 for user
  const count1 = count(user);
  if (count1 !== 2) {
    console.error(`Test case 1 failed. Expected 2, got ${count1}`);
    return;
  }

  // Test case 2: Count of properties for another user
  const anotherUser: User = {
    name: 'Alice',
    age: 25
  };
  const count2 = count(anotherUser);
  if (count2 !== 2) {
    console.error(`Test case 2 failed. Expected 2, got ${count2}`);
    return;
  }

  // Test case 3: Count of properties for user with the same values
  const sameUser: User = {
    name: 'John',
    age: 30
  };
  const count3 = count(sameUser);
  if (count3 !== 2) {
    console.error(`Test case 3 failed. Expected 2, got ${count3}`);
    return;
  }

  console.log("All test cases passed");
}

// Run the tests
testCount();