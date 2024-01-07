// テスト失敗

// Your Calculator class definition above...

// Test Cases
function testCalculator(): void {
  const calculator = new Calculator();

  // Test Addition
  const addResult = calculator.calculate("3 + 4");
  if (addResult !== 7) {
    console.error(`Addition failed. Expected 7, got ${addResult}`);
  }

  // Test Subtraction
  const subResult = calculator.calculate("7 - 4");
  if (subResult !== 3) {
    console.error(`Subtraction failed. Expected 3, got ${subResult}`);
  }

  // Test Invalid Operation
  const invalidOpResult = calculator.calculate("3 * 4");
  if (!isNaN(invalidOpResult)) {
    console.error(`Invalid operation failed. Expected NaN, got ${invalidOpResult}`);
  }

  // Test Adding New Method
  calculator.addMethod("*", (a, b) => a * b);
  const multiplyResult = calculator.calculate("3 * 4");
  if (multiplyResult !== 12) {
    console.error(`Adding new method failed. Expected 12, got ${multiplyResult}`);
  }

  // Test Invalid input
  const invalidInputResult = calculator.calculate("3 x 4");
  if (!isNaN(invalidInputResult)) {
    console.error(`Invalid input failed. Expected NaN, got ${invalidInputResult}`);
  }

  console.log("All test cases passed!");
}

// Run the test
testCalculator();