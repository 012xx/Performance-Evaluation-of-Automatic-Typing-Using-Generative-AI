// テスト生成 

function filterRangeInPlace(arr: number[], a: number, b: number): void {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// テスト関数
function testFilterRangeInPlace(): void {
  // ケース1
  const arr1: number[] = [1, 2, 3, 4, 5];
  filterRangeInPlace(arr1, 2, 4);
  if (JSON.stringify(arr1) !== JSON.stringify([2, 3, 4])) {
    console.error("Test case 1 failed");
    return;
  }

  // ケース2
  const arr2: number[] = [1, 2, 3, 4, 5];
  filterRangeInPlace(arr2, 0, 5);
  if (JSON.stringify(arr2) !== JSON.stringify([1, 2, 3, 4, 5])) {
    console.error("Test case 2 failed");
    return;
  }

  // ケース3
  const arr3: number[] = [-1, 0, 1];
  filterRangeInPlace(arr3, -1, 1);
  if (JSON.stringify(arr3) !== JSON.stringify([-1, 0, 1])) {
    console.error("Test case 3 failed");
    return;
  }

  // ケース4
  const arr4: number[] = [1, 1, 1];
  filterRangeInPlace(arr4, 1, 1);
  if (JSON.stringify(arr4) !== JSON.stringify([1, 1, 1])) {
    console.error("Test case 4 failed");
    return;
  }

  // ケース5
  const arr5: number[] = [];
  filterRangeInPlace(arr5, 1, 1);
  if (JSON.stringify(arr5) !== JSON.stringify([])) {
    console.error("Test case 5 failed");
    return;
  }

  console.log("All test cases passed!");
}

// テスト関数を呼び出す
testFilterRangeInPlace();