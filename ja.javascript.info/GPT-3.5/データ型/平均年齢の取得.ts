// テスト成功
// Your original code
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert(getAverageAge(arr)); // Should alert 28

// Test code
function testGetAverageAge() {
  // Test case 1
  let users1 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 }
  ];
  let result1 = getAverageAge(users1);
  console.assert(result1 === 28, `Expected 28, but got ${result1}`);

  // Test case 2: Testing with an empty array should return NaN
  let users2 = [];
  let result2 = getAverageAge(users2);
  console.assert(isNaN(result2), `Expected NaN, but got ${result2}`);

  // Test case 3: Testing with same ages
  let users3 = [
    { name: "A", age: 40 },
    { name: "B", age: 40 },
    { name: "C", age: 40 }
  ];
  let result3 = getAverageAge(users3);
  console.assert(result3 === 40, `Expected 40, but got ${result3}`);

  console.log("All test cases passed");
}

testGetAverageAge();