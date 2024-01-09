type Counter = {
  (): number;
  set(value: number): void;
  decrease(): void;
};

function makeCounter(): Counter {
  let count = 0;

  function counter(): number {
    return count++;
  }

  counter.set = (value: number) => (count = value);
  counter.decrease = () => count--;

  return counter;
}

// テスト
function testMakeCounter() {
  const counter = makeCounter();

  if (counter() !== 0) {
    console.error("Test 1 failed: Expected counter() to return 0.");
    return;
  }

  if (counter() !== 1) {
    console.error("Test 2 failed: Expected counter() to return 1.");
    return;
  }

  counter.set(5);
  if (counter() !== 5) {
    console.error("Test 3 failed: Expected counter() to return 5 after set.");
    return;
  }

  counter.decrease();
  if (counter() !== 5) {
    console.error(
      "Test 4 failed: Expected counter() to return 5 after decrease."
    );
    return;
  }

  console.log("All tests passed!");
}

testMakeCounter();
