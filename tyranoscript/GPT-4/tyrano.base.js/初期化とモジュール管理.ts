interface Tyrano {
  name: string;
  // その他の必要なプロパティやメソッド
}

const tyranoInitialization = {
  tyrano: null as Tyrano | null,
  modules: [] as any[],
  options: {} as Record<string, unknown>,
  init: function (tyrano: Tyrano) {
    this.tyrano = tyrano;
  },
};

// 簡単なアサーション関数
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

// テスト関数
function testTyranoInitialization() {
  // 1. `init` する前の `tyrano` の状態を確認
  assert(
    tyranoInitialization.tyrano === null,
    "Initial state of 'tyrano' should be null."
  );

  // 2. テスト用のデータを用意
  const mockTyrano: Tyrano = {
    name: "mockTyrano",
  };

  // 3. `init` を呼び出す
  tyranoInitialization.init(mockTyrano);

  // 4. `init` の後の `tyrano` の状態を確認
  assert(
    tyranoInitialization.tyrano === mockTyrano,
    "After init, 'tyrano' should be equal to mockTyrano."
  );
}

// テストを実行
try {
  testTyranoInitialization();
  console.log("All tests passed.");
} catch (error) {
  console.error("Test failed:", error);
}
