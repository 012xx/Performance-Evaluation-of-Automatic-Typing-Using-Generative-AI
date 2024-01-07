// テスト成功

// Your original function
function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Test cases
function testUnique() {
  // Test case 1
  const arr1: string[] = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  const result1: string[] = unique(arr1);
  console.assert(JSON.stringify(result1) === JSON.stringify(["Hare", "Krishna", ":-O"]), 'Test case 1 failed');

  // Test case 2
  const arr2: number[] = [1, 2, 2, 3, 4, 3, 5];
  const result2: number[] = unique(arr2);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 3, 4, 5]), 'Test case 2 failed');

  // Test case 3
  const arr3: any[] = [];
  const result3: any[] = unique(arr3);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), 'Test case 3 failed');

  console.log('All test cases passed');
}

// Execute test function
testUnique();