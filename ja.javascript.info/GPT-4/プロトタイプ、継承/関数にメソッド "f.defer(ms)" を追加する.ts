// Function型に対して安全でない拡張を行う
(Function.prototype as any).defer = function (this: Function, ms: number) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

// fをany型にキャストしてdeferを呼び出す
(f as any).defer(1000); // shows "Hello!" after 1 sec

// テスト部分
function testDeferFunction() {
  const originalAlert = window.alert;
  let alertedMessage = "";
  window.alert = (msg: string) => (alertedMessage = msg);

  (f as any).defer(1000);

  setTimeout(() => {
    if (alertedMessage === "Hello!") {
      console.log("Test passed!");
    } else {
      console.error("Test failed");
    }
    window.alert = originalAlert; // Restore original alert
  }, 1100);
}

testDeferFunction();
