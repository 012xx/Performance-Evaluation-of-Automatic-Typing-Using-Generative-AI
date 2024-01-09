function f(): void {
  try {
    alert("start");
    throw new Error("an error");
  } catch (e: any) {
    // 型を any として指定してエラーを回避します
    // ...

    // この部分は常にtrueに評価されるため、エラーを常に再スローします。
    // 実際の実装では、この条件を適切に処理する必要があります。
    if ("can't handle the error") {
      throw e;
    }
  } finally {
    alert("cleanup!");
  }
}

f();

// テスト
function testFunctionF() {
  try {
    f();
  } catch (e) {
    if (e instanceof Error && e.message === "an error") {
      // インスタンスのチェックを追加
      console.log("Test passed!");
      return;
    }
  }
  console.error("Test failed!");
}

testFunctionF();
