// 適切に型を付与できず失敗

// Your original code
function askPassword(ok: () => void, fail: () => void): void {
  let password = prompt("Password?", "");
  if (password === "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk(this: { name: string }) {
    alert(`${this.name} logged in`);
  },

  loginFail(this: { name: string }) {
    alert(`${this.name} failed to log in`);
  },
};

// Declare global variables for alert and prompt to override
declare global {
  var alert: (message?: any) => void;
  var prompt: (message?: string, _default?: string) => string | null;
}

let alertOutput: string | null = null; // To capture the output of 'alert'
let promptOutput: string | null = null; // To capture the output of 'prompt'

// Mock 'alert' for testing
alert = (value) => {
  alertOutput = value;
};

// Mock 'prompt' for testing
prompt = () => {
  return promptOutput;
};

// Test Suite
function runTests() {
  let testPassed = true;

  // Test 1: Check correct login
  promptOutput = "rockstar"; // Mock user entering the correct password
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  if (alertOutput !== "John logged in") {
    console.error(
      `Test 1 failed: Expected 'John logged in', but got ${alertOutput}`
    );
    testPassed = false;
  }

  // Test 2: Check failed login
  alertOutput = null; // Resetting the alert output
  promptOutput = "wrongpassword"; // Mock user entering the wrong password
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  if (alertOutput !== "John failed to log in") {
    console.error(
      `Test 2 failed: Expected 'John failed to log in', but got ${alertOutput}`
    );
    testPassed = false;
  }

  // Output test result
  if (testPassed) {
    console.log("All tests passed!");
  }
}

// Run the tests
runTests();
