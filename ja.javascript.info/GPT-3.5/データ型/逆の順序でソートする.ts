// テスト成功

let arr: number[] = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

// Test function to validate the output
function testSortDescending(): void {
  // Test case 1
  const arr1: number[] = [5, 2, 1, -10, 8];
  arr1.sort((a, b) => b - a);
  if (JSON.stringify(arr1) !== JSON.stringify([8, 5, 2, 1, -10])) {
    console.error("Test case 1 failed");
    return;
  }

  // Test case 2
  const arr2: number[] = [1, 1, 1, 1];
  arr2.sort((a, b) => b - a);
  if (JSON.stringify(arr2) !== JSON.stringify([1, 1, 1, 1])) {
    console.error("Test case 2 failed");
    return;
  }

  // Test case 3
  const arr3: number[] = [];
  arr3.sort((a, b) => b - a);
  if (JSON.stringify(arr3) !== JSON.stringify([])) {
    console.error("Test case 3 failed");
    return;
  }

  // Test case 4
  const arr4: number[] = [-2, -3, -1, -4];
  arr4.sort((a, b) => b - a);
  if (JSON.stringify(arr4) !== JSON.stringify([-1, -2, -3, -4])) {
    console.error("Test case 4 failed");
    return;
  }

  console.log("All test cases passed!");
}

// Call the test function
testSortDescending();