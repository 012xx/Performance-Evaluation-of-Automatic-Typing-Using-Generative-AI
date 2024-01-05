// テスト成功

function show(): void {
  let a: number = +prompt("a?", "");

  switch (a) {
    case 0:
      alert(0);
      break;

    case 1:
      alert(1);
      break;

    case 2:
    case 3:
      alert("2,3");
      break;
  }
}

function testShow(): void {
  // Original functions backup
  const originalPrompt = window.prompt;
  const originalAlert = window.alert;

  let alertValue: string | number | null = null;

  // Mock alert and prompt functions
  window.alert = (value: string | number) => {
    alertValue = value;
  };

  const testCases: Array<{ input: string; expected: string | number }> = [
    { input: "0", expected: 0 },
    { input: "1", expected: 1 },
    { input: "2", expected: "2,3" },
    { input: "3", expected: "2,3" },
  ];

  for (const testCase of testCases) {
    // Reset alert value
    alertValue = null;

    // Mock prompt return value
    window.prompt = () => testCase.input;

    // Run the function
    show();

    if (alertValue !== testCase.expected) {
      console.error(
        `Test failed for input ${testCase.input}. Expected ${testCase.expected}, but got ${alertValue}.`
      );
      return;
    }
  }

  console.log("All tests passed!");

  // Restore original functions
  window.prompt = originalPrompt;
  window.alert = originalAlert;
}

testShow();
