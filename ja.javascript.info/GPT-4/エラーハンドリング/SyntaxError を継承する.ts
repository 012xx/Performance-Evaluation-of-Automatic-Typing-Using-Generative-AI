class FormatError extends SyntaxError {
  constructor(message: string) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("formatting error");

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // stack

console.log(err instanceof SyntaxError); // true

// テスト
function testFormatError() {
  const error = new FormatError("test error");

  if (
    error.message === "test error" &&
    error.name === "FormatError" &&
    error instanceof SyntaxError
  ) {
    console.log("Test passed!");
  } else {
    console.error("Test failed!");
  }
}

testFormatError();
