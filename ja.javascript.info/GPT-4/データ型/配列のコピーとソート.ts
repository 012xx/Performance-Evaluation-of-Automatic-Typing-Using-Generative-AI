function copySorted(arr: string[]): string[] {
  return arr.slice().sort();
}

let arr: string[] = ["HTML", "JavaScript", "CSS"];

let sorted: string[] = copySorted(arr);

alert(sorted);
alert(arr);

// テスト関数
function testCopySorted() {
  const initialArr = ["HTML", "JavaScript", "CSS"];
  const sortedArr = copySorted(initialArr);
  if (
    JSON.stringify(sortedArr) !== JSON.stringify(["CSS", "HTML", "JavaScript"])
  ) {
    console.error(
      `Test failed: Expected ["CSS", "HTML", "JavaScript"] but got ${JSON.stringify(
        sortedArr
      )}`
    );
  } else {
    console.log("Sorted array test passed!");
  }

  if (
    JSON.stringify(initialArr) !== JSON.stringify(["HTML", "JavaScript", "CSS"])
  ) {
    console.error(
      `Test failed: Original array was modified. Expected ["HTML", "JavaScript", "CSS"] but got ${JSON.stringify(
        initialArr
      )}`
    );
  } else {
    console.log("Original array integrity test passed!");
  }
}

// テストを実行
testCopySorted();
