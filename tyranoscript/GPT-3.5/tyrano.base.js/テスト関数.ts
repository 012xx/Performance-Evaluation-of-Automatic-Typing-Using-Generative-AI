const tyranoTester = {
  test(): void {
    alert("tyrano test");
  },
};

// Testing starts from here

const test = (description: string, func: () => boolean) => {
  const result = func();
  console.log(`${description}: ${result ? "PASS" : "FAIL"}`);
};

// Override alert function to capture the message and confirm that the function is called correctly
let lastAlertMessage: string | null = null;
const originalAlert = window.alert;
window.alert = (msg: string) => {
  lastAlertMessage = msg;
};

test("Check tyranoTester.test() calls alert with correct message", () => {
  tyranoTester.test();
  const result = lastAlertMessage === "tyrano test";
  lastAlertMessage = null; // Reset for next test
  return result;
});

test("Type check - tyranoTester.test() return type", () => {
  const resultType = typeof tyranoTester.test();
  return resultType === "undefined";
});

// Restore original alert function after tests
window.alert = originalAlert;
