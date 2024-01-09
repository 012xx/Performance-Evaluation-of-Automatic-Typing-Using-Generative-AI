function f(this: any) {
  alert(this); // null
}

let user: { g: () => void } = {
  g: f.bind(null),
};

user.g();

// テスト
function testFunctionBind(): void {
  const originalAlert = window.alert;
  let alertedValue: any = null;

  window.alert = (msg: any) => {
    alertedValue = msg;
  };

  user.g();

  if (alertedValue === null) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed! Expected 'null' but got '${alertedValue}'`);
  }

  window.alert = originalAlert; // restore original alert function
}

testFunctionBind();
