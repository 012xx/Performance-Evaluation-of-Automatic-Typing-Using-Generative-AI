// 既存のコード
function f() {
  try {
    alert("start");
    throw new Error("an error");
  } catch (e) {
    // エラーを処理するコード
    if ("can't handle the error") {
      throw e;
    }
  } finally {
    alert("cleanup!");
  }
}

// alert関数をモック
const alertMock = jest.fn();
global.alert = alertMock;

// テスト用の関数
function test(description, func) {
  try {
    func();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

// テストケース
test("関数fはErrorを投げる", () => {
  let hasThrown = false;
  try {
    f();
  } catch (e) {
    hasThrown = true;
    if (e.message !== "an error") {
      throw new Error(
        `期待されるエラーメッセージ'an error'ではありませんでした。実際は： ${e.message}`
      );
    }
  }
  if (!hasThrown) {
    throw new Error("関数fはErrorを投げませんでした");
  }
});

test("関数fが呼び出されたときにalertが2回呼び出される", () => {
  if (alertMock.mock.calls.length !== 2) {
    throw new Error(
      `alertが2回ではなく、${alertMock.mock.calls.length}回呼び出されました`
    );
  }
});
