function delay(ms: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));

// テスト
function testDelay() {
  const startTime = Date.now();

  delay(1000).then(() => {
    const duration = Date.now() - startTime;

    if (duration >= 1000 && duration < 1100) {
      console.log("Test passed!");
    } else {
      console.error("Test failed!");
    }
  });
}

testDelay();
