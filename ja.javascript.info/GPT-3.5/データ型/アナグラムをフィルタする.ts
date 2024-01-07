// テスト成功

// Your original function
function aclean(arr: string[]): string[] {
  let map = new Map<string, string>();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

// Test cases
function testAclean() {
  // Test case 1
  const arr1: string[] = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  const result1: string[] = aclean(arr1);
  console.assert(JSON.stringify(result1) === JSON.stringify(["PAN", "hectares", "era"]), 'Test case 1 failed');

  // Test case 2
  const arr2: string[] = ["abc", "cab", "bac", "test", "tset"];
  const result2: string[] = aclean(arr2);
  console.assert(JSON.stringify(result2) === JSON.stringify(["bac", "tset"]), 'Test case 2 failed');

  // Test case 3
  const arr3: string[] = [];
  const result3: string[] = aclean(arr3);
  console.assert(JSON.stringify(result3) === JSON.stringify([]), 'Test case 3 failed');

  console.log('All test cases passed');
}

// Execute the test function
testAclean();