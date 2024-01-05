// テスト成功

function showPrompt(): void {
  let userName: string | null = prompt("Who's there?", "");

  if (userName === "Admin") {
    let pass: string | null = prompt("Password?", "");

    if (pass === "TheMaster") {
      alert("Welcome!");
    } else if (pass === "" || pass === null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (userName === "" || userName === null) {
    alert("Canceled");
  } else {
    alert("I don't know you");
  }
}

// Testing showPrompt function
(function testShowPrompt() {
  const originalPrompt = window.prompt;
  const originalAlert = window.alert;
  let alertMessage: string = "";

  window.alert = (message: string) => {
    alertMessage = message;
  };

  // Test cases
  const testCases = [
    { input: ["Admin", "TheMaster"], expected: "Welcome!" },
    { input: ["Admin", "1234"], expected: "Wrong password" },
    { input: ["Admin", ""], expected: "Canceled" },
    { input: ["Admin", null], expected: "Canceled" },
    { input: ["User", null], expected: "I don't know you" },
    { input: ["", null], expected: "Canceled" },
    { input: [null, null], expected: "Canceled" },
  ];

  for (let testCase of testCases) {
    window.prompt = (): string | null => {
      return testCase.input.shift() as string | null;
    };
    showPrompt();
    if (alertMessage === testCase.expected) {
      console.log(`Test with input ${testCase.input} passed!`);
    } else {
      console.error(
        `Test with input ${testCase.input} failed. Expected ${testCase.expected} but got ${alertMessage}`
      );
    }
  }

  window.prompt = originalPrompt;
  window.alert = originalAlert;
})();
