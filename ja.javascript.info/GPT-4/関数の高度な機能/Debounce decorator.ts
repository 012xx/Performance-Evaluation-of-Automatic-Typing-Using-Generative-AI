function debounce<T extends any[]>(
  f: (...args: T) => void,
  ms: number
): (...args: T) => void {
  let isCooldown = false;

  return function (this: any, ...args: T) {
    if (isCooldown) return;

    f.apply(this, args);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

// テスト
function testDebounceFunction(): void {
  let log = "";

  function mockLog(msg: string): void {
    log += msg + ";";
  }

  const debouncedLog = debounce(mockLog, 50);
  debouncedLog("A");
  debouncedLog("B");
  debouncedLog("C");

  setTimeout(() => {
    if (log === "A;") {
      console.log("Test passed!");
    } else {
      console.error(`Test failed! Expected 'A;' but got '${log}'`);
    }
  }, 100);
}

testDebounceFunction();
