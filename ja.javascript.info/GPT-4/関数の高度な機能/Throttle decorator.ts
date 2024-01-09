function throttle<T extends any[]>(
  func: (...args: T) => void,
  ms: number
): (...args: T) => void {
  let isThrottled = false;
  let savedArgs: T | null;
  let savedThis: any;

  function wrapper(this: any, ...args: T) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// テスト
function testThrottleFunction(): void {
  let log = "";

  function mockLog(msg: string): void {
    log += msg + ";";
  }

  const throttledLog = throttle(mockLog, 50);
  throttledLog("A");
  throttledLog("B");
  throttledLog("C");

  setTimeout(() => {
    if (log === "A;C;") {
      console.log("Test passed!");
    } else {
      console.error(`Test failed! Expected 'A;C;' but got '${log}'`);
    }
  }, 100);
}

testThrottleFunction();
