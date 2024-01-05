// テスト成功

function show(browser: string): void {
  if (browser === "Edge") {
    alert("You've got the Edge!");
  } else if (
    browser === "Chrome" ||
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera"
  ) {
    alert("Okay we support these browsers too");
  } else {
    alert("We hope that this page looks ok!");
  }
}

function testShowFunction() {
  const originalAlert = window.alert;
  let alerts: string[] = [];

  // alertをモックする
  window.alert = function (msg: string): void {
    alerts.push(msg);
  };

  const testCases: { input: string; expected: string }[] = [
    { input: "Edge", expected: "You've got the Edge!" },
    { input: "Chrome", expected: "Okay we support these browsers too" },
    { input: "Firefox", expected: "Okay we support these browsers too" },
    { input: "Safari", expected: "Okay we support these browsers too" },
    { input: "Opera", expected: "Okay we support these browsers too" },
    { input: "IE", expected: "We hope that this page looks ok!" },
  ];

  for (let testCase of testCases) {
    show(testCase.input);
    const lastAlert = alerts[alerts.length - 1];
    if (lastAlert !== testCase.expected) {
      console.error(
        `Test failed for input ${testCase.input}. Expected: ${testCase.expected}, but got: ${lastAlert}`
      );
      return;
    }
  }

  console.log("All tests passed!");

  // alert関数を元のものに戻す
  window.alert = originalAlert;
}

testShowFunction();
