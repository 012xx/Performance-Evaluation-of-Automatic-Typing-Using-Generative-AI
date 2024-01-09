function inBetween(a: number, b: number): (x: number) => boolean {
  return function (x: number): boolean {
    return x >= a && x <= b;
  };
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// テスト
function testInBetween() {
  let result = arr.filter(inBetween(3, 6));
  let expected = [3, 4, 5, 6];

  if (JSON.stringify(result) === JSON.stringify(expected)) {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected [3,4,5,6] but got [${result.join(",")}]`
    );
  }
}

testInBetween();
