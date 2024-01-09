interface Function {
  defer(this: (...args: any[]) => any, ms: number): (...args: any[]) => void;
}

Function.prototype.defer = function (
  this: (...args: any[]) => void,
  ms: number
) {
  let f = this;
  return function (...args: any[]) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

// check it
function f(a: number, b: number): void {
  alert(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 sec

// テスト部分
function testDeferFunction() {
  const originalAlert = window.alert;
  let alertedMessage = "";
  window.alert = (msg: any) => (alertedMessage = msg);

  f.defer(1000)(1, 2);

  setTimeout(() => {
    if (alertedMessage === "3") {
      console.log("Test passed!");
    } else {
      console.error(`Test failed! Expected '3' but got '${alertedMessage}'`);
    }
    window.alert = originalAlert; // Restore original alert
  }, 1100);
}

testDeferFunction();
