let i: number = 0;

let start: number = Date.now();

let timer = setInterval(count, 0);

function count(): void {
  for (let j: number = 0; j < 1000000; j++) {
    i++;
  }

  if (i == 1000000000) {
    alert("Done in " + (Date.now() - start) + "ms");
    clearInterval(timer);
  }
}

// テスト
function testIntervalFunction(): void {
  let mockAlert: string = "";
  const originalAlert = window.alert;
  window.alert = (msg: any) => {
    mockAlert = msg.toString();
  };

  // As a test, we shorten the loop for quicker results.
  i = 9999000000;
  count();

  const expectedMsg = "Done in " + (Date.now() - start) + "ms";
  if (mockAlert !== expectedMsg) {
    console.error(
      `Test failed: Expected '${expectedMsg}' but got '${mockAlert}'`
    );
  } else {
    console.log("Test passed!");
  }

  window.alert = originalAlert; // restore original alert function
}

testIntervalFunction();
