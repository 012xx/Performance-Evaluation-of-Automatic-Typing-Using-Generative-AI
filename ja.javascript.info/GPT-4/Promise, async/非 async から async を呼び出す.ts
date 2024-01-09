async function wait(): Promise<number> {
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f(): void {
  // Show 10 after 1 second
  wait().then((result) => alert(result));
}

f();

// Test
async function testWaitFunction() {
  const result = await wait();
  if (result === 10) {
    console.log("Test passed: Function returned the expected value.");
  } else {
    console.error("Test failed: Function did not return the expected value.");
  }
}

testWaitFunction();
