type ArrayElement = string | (() => void);

let arr: ArrayElement[] = ["a", "b"];

arr.push(function (this: ArrayElement[]) {
  alert(this.toString());
});

arr[2](); // "a","b",function

// テスト関数
function testArray() {
  if (arr.length !== 3) {
    console.error(
      `Test failed. Expected arr length to be 3, but got ${arr.length}`
    );
  } else {
    console.log("Test passed for array length.");
  }

  if (typeof arr[2] !== "function") {
    console.error(
      `Test failed. Expected the third item in arr to be a function.`
    );
  } else {
    console.log("Test passed for the third item type.");
  }
}

// テストを実行
testArray();
