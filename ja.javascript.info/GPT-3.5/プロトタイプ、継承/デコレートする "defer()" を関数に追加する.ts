// Your existing code with type definitions
declare global {
  interface Function {
    defer(ms: number, ...args: any[]): void;
  }
}

Function.prototype.defer = function (ms: number, ...args: any[]): void {
  const fn = this as Function;
  setTimeout(() => fn(...args), ms);
};

function f(a: number, b: number): void {
  alert(a + b);
}

// Test Suite
function runTests() {
  // Mock the alert function
  const originalAlert = window.alert;
  let alertCalled = false;
  let alertValue: number | null = null;

  window.alert = function (value: any) {
    alertCalled = true;
    alertValue = value;
  };

  // Test 1: Check if alert is called with correct value (3) after 1 second
  f.defer(1000, 1, 2);

  setTimeout(() => {
    if (alertCalled && alertValue === 3) {
      console.log(
        "Test 1 passed: Alert was called with the correct value after 1 second"
      );
    } else {
      console.error(
        "Test 1 failed: Alert was not called with the correct value after 1 second"
      );
    }

    // Restore the original alert function
    window.alert = originalAlert;
  }, 1100);
}

// Run the tests
runTests();
