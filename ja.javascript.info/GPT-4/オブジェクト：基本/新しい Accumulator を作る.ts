function runAccumulatorTests() {
  // Mock the prompt function to simulate user input
  const originalPrompt = prompt;

  let promptCount = 0;
  (window as any).prompt = (message: string) => {
    promptCount++;
    if (promptCount === 1) {
      return "5";
    } else if (promptCount === 2) {
      return "3";
    }
    return "0";
  };

  const testAccumulator = new (Accumulator as any)(1);
  testAccumulator.read();
  testAccumulator.read();

  if (testAccumulator.value !== 9) {
    console.error(
      `Test failed: Expected value to be 9, but got ${testAccumulator.value}`
    );
  } else {
    console.log("Accumulator test passed!");
  }

  // Restore the original prompt function
  (window as any).prompt = originalPrompt;
}

// テストを実行
runAccumulatorTests();
