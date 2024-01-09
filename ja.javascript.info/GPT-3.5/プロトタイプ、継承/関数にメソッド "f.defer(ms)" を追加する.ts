// Original code and type definitions
declare global {
  interface Function {
    defer(ms: number): void;
  }
}

Function.prototype.defer = function (ms: number): void {
  const fn = this as Function;
  setTimeout(function () {
    fn();
  }, ms);
};

function f() {
  alert("Hello!");
}

// Test Suite
function runTests() {
  // Mock the alert function
  const originalAlert = window.alert;
  let alertCalled = false;
  window.alert = function (message: string): void {
    if (message === "Hello!") {
      alertCalled = true;
    }
  };

  // Test 1: Check if alert is called after 1 second
  f.defer(1000);
  setTimeout(() => {
    if (alertCalled) {
      console.log("Test 1 passed: Alert was called after 1 second");
    } else {
      console.error("Test 1 failed: Alert was not called after 1 second");
    }

    // Restore the original alert function
    window.alert = originalAlert;
  }, 1100);
}

// Run the tests
runTests();
