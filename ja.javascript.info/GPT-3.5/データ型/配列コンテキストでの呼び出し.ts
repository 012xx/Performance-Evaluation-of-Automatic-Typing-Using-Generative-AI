// テスト成功
// モック関数を定義して、alertの代わりに使用する
let mockAlertCalledWith: any = null;
const mockAlert = (value: any) => {
    mockAlertCalledWith = value;
};

// 上記のコードを修正して、alertの代わりにmockAlertを使用
let arr: (string | Function)[] = ["a", "b"];

arr.push(function(this: Window) {
  mockAlert(this);
});

const thirdElement = arr[2];

if (typeof thirdElement === "function") {
  thirdElement.call(window);
}

// テストの実行
function testArrayWithMockFunction() {
  // 配列の長さを確認
  if (arr.length !== 3) {
    console.error(`Test failed: expected arr.length to be 3, but got ${arr.length}`);
    return;
  }

  // 最後の要素が関数であることを確認
  if (typeof arr[2] !== "function") {
    console.error(`Test failed: expected last element to be a function, but got ${typeof arr[2]}`);
    return;
  }

  // モック関数が期待される値で呼び出されたことを確認
  if (mockAlertCalledWith !== window) {
    console.error(`Test failed: expected mockAlert to be called with window object, but got ${mockAlertCalledWith}`);
    return;
  }

  console.log("All tests passed!");
}

// テスト関数を実行
testArrayWithMockFunction();