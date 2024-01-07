// 型変換しなかった

// Your original code
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

// Test cases
function testReadMap() {
  // Test case 1: Check if readMap recognizes the first message as read
  if (!readMap.has(messages[0])) {
    console.error('Test case 1 failed');
    return;
  }

  // Test case 2: Check the stored date for the first message
  const storedDate = readMap.get(messages[0]);
  const expectedDate = new Date(2017, 1, 1);
  if (storedDate.getTime() !== expectedDate.getTime()) {
    console.error('Test case 2 failed');
    return;
  }

  // Test case 3: Check if readMap recognizes the second message as not read
  if (readMap.has(messages[1])) {
    console.error('Test case 3 failed');
    return;
  }

  // Test case 4: Check if readMap recognizes the third message as not read
  if (readMap.has(messages[2])) {
    console.error('Test case 4 failed');
    return;
  }

  console.log('All test cases passed');
}

// Execute the test function
testReadMap();