// 適切に型を生成できず失敗

// Your original code
function spy<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  function wrapper(...args: Parameters<T>): ReturnType<T> {
    (wrapper as any).calls.push(args);
    return func.apply(this, args);
  }

  (wrapper as any).calls = [];

  return wrapper as any;
}

// Test suite
function runTests() {
  // Test 1: Function should be called with specific arguments
  const testFunc1 = (a: number, b: number): number => a + b;
  const spyFunc1 = spy(testFunc1);

  spyFunc1(5, 3);

  if (JSON.stringify(spyFunc1.calls[0]) !== JSON.stringify([5, 3])) {
    return console.error("Test 1 failed");
  }

  // Test 2: Function should be called multiple times
  spyFunc1(2, 2);
  spyFunc1(3, 1);

  if (spyFunc1.calls.length !== 3) {
    return console.error("Test 2 failed");
  }

  // Test 3: Function should be called with no arguments
  const testFunc2 = (): string => "no args";
  const spyFunc2 = spy(testFunc2);

  spyFunc2();

  if (JSON.stringify(spyFunc2.calls[0]) !== JSON.stringify([])) {
    return console.error("Test 3 failed");
  }

  // Test 4: Function should return the correct value
  const testFunc3 = (x: number): number => x * 2;
  const spyFunc3 = spy(testFunc3);

  const result = spyFunc3(5);

  if (result !== 10) {
    return console.error("Test 4 failed");
  }

  // All tests passed
  console.log("All tests passed!");
}

// Run the tests
runTests();
