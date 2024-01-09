type User = {
  name: string;
  ref: any;
};

function makeUser(this: any): User {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

// テスト関数
function testMakeUser(): void {
  if (user.name !== "John") {
    console.error(`Expected user.name to be "John", but got "${user.name}"`);
  } else if (user.ref !== globalThis) {
    console.error(
      "Expected user.ref to reference the global object, but it didn't."
    );
  } else {
    console.log("All tests passed!");
  }
}

testMakeUser();
