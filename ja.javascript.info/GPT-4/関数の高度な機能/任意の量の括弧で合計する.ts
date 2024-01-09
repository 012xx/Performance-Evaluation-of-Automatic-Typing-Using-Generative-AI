type SumFunction = {
  (a: number): SumFunction;
  toString: () => string;
};

function sum(a: number): SumFunction {
  let currentSum = a;

  function f(b: number): SumFunction {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum.toString();
  };

  return f;
}

// テスト
function testSumFunction() {
  if (sum(1)(2).toString() !== "3") {
    console.error("Test 1 failed: Expected sum(1)(2) to be 3.");
    return;
  }

  if (sum(5)(-1)(2).toString() !== "6") {
    console.error("Test 2 failed: Expected sum(5)(-1)(2) to be 6.");
    return;
  }

  if (sum(6)(-1)(-2)(-3).toString() !== "0") {
    console.error("Test 3 failed: Expected sum(6)(-1)(-2)(-3) to be 0.");
    return;
  }

  if (sum(0)(1)(2)(3)(4)(5).toString() !== "15") {
    console.error("Test 4 failed: Expected sum(0)(1)(2)(3)(4)(5) to be 15.");
    return;
  }

  console.log("All tests passed!");
}

testSumFunction();
