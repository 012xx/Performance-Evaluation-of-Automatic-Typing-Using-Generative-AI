type Func<T extends any[] = any[]> = (...args: T) => any;

function spy<T extends any[]>(func: Func<T>): Func<T> & { calls: T[] } {
  function wrapper(this: any, ...args: T): any {
    (wrapper as any).calls.push(args);
    return func.apply(this, args);
  }

  (wrapper as any).calls = [];

  return wrapper as Func<T> & { calls: T[] };
}

// テスト
function testSpyFunction(): void {
  function sum(a: number, b: number): number {
    return a + b;
  }

  const spiedSum = spy(sum);
  spiedSum(1, 2);
  spiedSum(3, 4);

  if (
    JSON.stringify(spiedSum.calls) !==
    JSON.stringify([
      [1, 2],
      [3, 4],
    ])
  ) {
    console.error(
      `Test failed: Expected '[[1, 2], [3, 4]]' but got '${JSON.stringify(
        spiedSum.calls
      )}'`
    );
  } else {
    console.log("Test passed!");
  }
}

testSpyFunction();
