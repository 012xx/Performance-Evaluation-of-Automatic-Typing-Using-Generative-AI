type Test = {
  expression: () => any;
  expected: any;
};

function testExpressions(): void {
  const tests: Test[] = [
    { expression: () => "" + 1 + 0, expected: "10" },
    { expression: () => +("" - 1 + 0), expected: -1 },
    { expression: () => +true + +false, expected: 1 }, // boolean to number conversion
    { expression: () => 6 / +"3", expected: 2 },
    { expression: () => +"2" * +"3", expected: 6 },
    { expression: () => 4 + 5 + "px", expected: "9px" },
    { expression: () => "$" + 4 + 5, expected: "$45" },
    { expression: () => +"4" - 2, expected: 2 },
    { expression: () => +"4px" - 2, expected: NaN },
    { expression: () => 7 / 0, expected: Infinity },
    { expression: () => "  -9  " + 5, expected: " -9  5" },
    { expression: () => +"  -9  " - 5, expected: -14 },
    { expression: () => +(null as any) + 1, expected: 1 }, // casting null to any
    { expression: () => +(undefined as any) + 1, expected: NaN }, // casting undefined to any
    { expression: () => +" \t \n" - 2, expected: -2 },
  ];

  tests.forEach((test, index) => {
    const result = test.expression();
    if (typeof result === "number" && isNaN(result)) {
      if (isNaN(test.expected)) {
        console.log(`Expression ${index + 1} passed!`);
      } else {
        console.error(
          `Expression ${index + 1} failed: Expected ${
            test.expected
          }, but got NaN.`
        );
      }
    } else if (result !== test.expected) {
      console.error(
        `Expression ${index + 1} failed: Expected "${
          test.expected
        }", but got "${result}".`
      );
    } else {
      console.log(`Expression ${index + 1} passed!`);
    }
  });
}

testExpressions();
