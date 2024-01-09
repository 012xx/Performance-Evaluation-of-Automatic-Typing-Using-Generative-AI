// テスト成功

function inBetween(a: number, b: number) {
  return function (x: number) {
    return x >= a && x <= b;
  };
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6))); // [3, 4, 5, 6]

// テストコード
function testInBetween() {
  let testPassed = true;

  const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
  const filteredArr: number[] = arr.filter(inBetween(3, 6));

  // Filtered array should be [3, 4, 5, 6]
  if (JSON.stringify(filteredArr) !== JSON.stringify([3, 4, 5, 6])) {
    console.error(
      "Test failed: arr.filter(inBetween(3, 6)) should return [3, 4, 5, 6]"
    );
    testPassed = false;
  }

  // Add more test cases as needed

  if (testPassed) {
    console.log("All tests passed!");
  }
}

// Run the test function
testInBetween();
