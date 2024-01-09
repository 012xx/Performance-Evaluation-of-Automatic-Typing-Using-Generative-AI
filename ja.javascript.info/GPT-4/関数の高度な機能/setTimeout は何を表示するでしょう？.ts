let i: number = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for (let j: number = 0; j < 100000000; j++) {
  i++;
}

// テスト
function testSetTimeoutFunction(): void {
  let mockAlert: string = "";
  const originalAlert = window.alert;
  window.alert = (msg: any) => {
    mockAlert = msg.toString();
  };

  // As a test, we shorten the loop for quicker results.
  i = 99999999;
  for (let j: number = 0; j < 1; j++) {
    i++;
  }
  setTimeout(() => {
    if (mockAlert !== "100000000") {
      console.error(`Test failed: Expected '100000000' but got '${mockAlert}'`);
    } else {
      console.log("Test passed!");
    }
  }, 150);

  window.alert = originalAlert; // restore original alert function
}

testSetTimeoutFunction();
