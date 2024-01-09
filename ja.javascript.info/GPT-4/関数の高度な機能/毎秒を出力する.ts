let i: number = 0;

let start: number = Date.now();

let timer: number = setInterval(count, 0);

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
function testCountFunction(): void {
  let mockAlert: string = "";
  const originalAlert = window.alert;
  window.alert = (msg: string) => {
    mockAlert = msg;
  };

  count();
  count();

  if (mockAlert !== "") {
    console.error(`Test failed: Expected no alert, but got '${mockAlert}'`);
    return;
  }

  for (let k = 0; k < 998; k++) {
    count();
  }

  if (mockAlert !== "Done in " + (Date.now() - start) + "ms") {
    console.error(
      `Test failed: Expected 'Done in ...ms' but got '${mockAlert}'`
    );
  } else {
    console.log("Test passed!");
  }

  window.alert = originalAlert; // restore original alert function
}

testCountFunction();
