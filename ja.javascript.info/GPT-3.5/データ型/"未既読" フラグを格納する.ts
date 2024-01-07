// 型変換しなかった

// Your original code
let map = new Map<string, string>();

map.set("name", "John");

let keys: string[] = Array.from(map.keys());

keys.push("more");

// Test cases
function testKeys(): void {
  // Test case 1: Check if 'keys' array has length 2 after pushing "more"
  if (keys.length !== 2) {
    console.error('Test case 1 failed');
    return;
  }

  // Test case 2: Check if first element of 'keys' array is "name"
  if (keys[0] !== "name") {
    console.error('Test case 2 failed');
    return;
  }

  // Test case 3: Check if second element of 'keys' array is "more"
  if (keys[1] !== "more") {
    console.error('Test case 3 failed');
    return;
  }

  // Test case 4: Check if 'map' still has only one key
  if (map.size !== 1) {
    console.error('Test case 4 failed');
    return;
  }

  console.log('All test cases passed');
}

// Execute the test function
testKeys();