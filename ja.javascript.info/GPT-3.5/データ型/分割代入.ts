// テスト成功

type User = {
  name: string;
  years: number;
};

let user: User = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false }: { name: string; years: number; isAdmin?: boolean } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

// Test Cases
function testDestructuring() {
  // Test case 1: name should be "John"
  if (name !== "John") {
    console.error(`Test case 1 failed. Expected "John", got ${name}`);
    return;
  }
  
  // Test case 2: age should be 30
  if (age !== 30) {
    console.error(`Test case 2 failed. Expected 30, got ${age}`);
    return;
  }

  // Test case 3: isAdmin should be false
  if (isAdmin !== false) {
    console.error(`Test case 3 failed. Expected false, got ${isAdmin}`);
    return;
  }
  
  // Test case 4: Check if all keys are present in the original user object
  if (!('name' in user && 'years' in user)) {
    console.error('Test case 4 failed. One or more keys are missing in the original user object.');
    return;
  }

  // Test case 5: Check types
  if (typeof name !== 'string' || typeof age !== 'number' || typeof isAdmin !== 'boolean') {
    console.error('Test case 5 failed. One or more variables have incorrect types.');
    return;
  }

  console.log("All test cases passed");
}

// Run the tests
testDestructuring();