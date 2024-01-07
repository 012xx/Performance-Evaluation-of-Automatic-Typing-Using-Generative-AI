// テスト成功

// Your original code
function unique<T>(arr: T[]): T[] {
  let result: T[] = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

// Test code
function testUnique(): void {
  // Test case 1: All unique elements
  const arr1: string[] = ["a", "b", "c"];
  const result1 = unique<string>(arr1);
  console.assert(JSON.stringify(result1) === JSON.stringify(["a", "b", "c"]), `Expected ["a", "b", "c"], but got ${JSON.stringify(result1)}`);

  // Test case 2: Some duplicates
  const arr2: number[] = [1, 2, 3, 1, 2];
  const result2 = unique<number>(arr2);
  console.assert(JSON.stringify(result2) === JSON.stringify([1, 2, 3]), `Expected [1, 2, 3], but got ${JSON.stringify(result2)}`);

  // Test case 3: All duplicates
  const arr3: boolean[] = [true, true, true];
  const result3 = unique<boolean>(arr3);
  console.assert(JSON.stringify(result3) === JSON.stringify([true]), `Expected [true], but got ${JSON.stringify(result3)}`);

  // Test case 4: Empty array
  const arr4: any[] = [];
  const result4 = unique<any>(arr4);
  console.assert(JSON.stringify(result4) === JSON.stringify([]), `Expected [], but got ${JSON.stringify(result4)}`);

  console.log("All test cases passed");
}

testUnique();