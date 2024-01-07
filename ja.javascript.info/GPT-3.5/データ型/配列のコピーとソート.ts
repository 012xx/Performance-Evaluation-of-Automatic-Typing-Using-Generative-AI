// テスト成功

// Original function
function copySorted(arr: string[]): string[] {
  return arr.slice().sort();
}

let arr: string[] = ["HTML", "JavaScript", "CSS"];
let sorted: string[] = copySorted(arr);

alert(sorted);
alert(arr);

// Test function to validate the output
function testCopySorted() {
  // Test case 1
  const original1: string[] = ["HTML", "JavaScript", "CSS"];
  const sorted1: string[] = copySorted(original1);
  if (JSON.stringify(sorted1) !== JSON.stringify(["CSS", "HTML", "JavaScript"])) {
    console.error("Test case 1 failed");
    return;
  }

  // Test if original array remains unchanged
  if (JSON.stringify(original1) !== JSON.stringify(["HTML", "JavaScript", "CSS"])) {
    console.error("Test case 1 failed: Original array was modified");
    return;
  }

  // Test case 2: Test with an already sorted array
  const original2: string[] = ["Apple", "Banana", "Cherry"];
  const sorted2: string[] = copySorted(original2);
  if (JSON.stringify(sorted2) !== JSON.stringify(["Apple", "Banana", "Cherry"])) {
    console.error("Test case 2 failed");
    return;
  }

  // Test case 3: Test with an empty array
  const original3: string[] = [];
  const sorted3: string[] = copySorted(original3);
  if (JSON.stringify(sorted3) !== JSON.stringify([])) {
    console.error("Test case 3 failed");
    return;
  }

  console.log("All test cases passed!");
}

// Call the test function
testCopySorted();