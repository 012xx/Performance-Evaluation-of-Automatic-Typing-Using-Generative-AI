// テスト成功

type LoginType = "Employee" | "Director" | "" | "Other";

function getMessageForLogin(login: LoginType): string {
  let message: string;

  if (login === "Employee") {
    message = "Hello";
  } else if (login === "Director") {
    message = "Greetings";
  } else if (login === "") {
    message = "No login";
  } else {
    message = "";
  }

  return message;
}

function runTests() {
  const testCases = [
    { login: "Employee", expected: "Hello" },
    { login: "Director", expected: "Greetings" },
    { login: "", expected: "No login" },
    { login: "Other", expected: "" },
  ];

  testCases.forEach((testCase, index) => {
    const result = getMessageForLogin(testCase.login);

    // Check the result
    if (result === testCase.expected) {
      console.log(`Test ${index + 1} for value "${testCase.login}" passed!`);
    } else {
      console.error(
        `Test ${index + 1} for value "${testCase.login}" failed! Expected "${
          testCase.expected
        }", but got "${result}"`
      );
      return; // Exit this iteration if the value check failed
    }

    // Check the type
    if (typeof result === "string") {
      console.log(
        `Type test ${index + 1} for value "${testCase.login}" passed!`
      );
    } else {
      console.error(
        `Type test ${index + 1} for value "${
          testCase.login
        }" failed! Expected "string", but got "${typeof result}"`
      );
    }
  });
}

runTests();
