const tyranoInitialization = {
  tyrano: null,
  modules: [],
  options: {},
  init: function (tyrano) {
    this.tyrano = tyrano;
  },
};

// テスト部分の追加
(function test_tyranoInitialization() {
  // 1. `init` する前の `tyrano` の状態を確認
  if (tyranoInitialization.tyrano !== null) {
    console.error("Initial state of 'tyrano' is incorrect.");
    return;
  }

  // 2. テスト用のデータを用意
  const mockTyrano = {
    name: "mockTyrano",
  };

  // 3. `init` を呼び出す
  tyranoInitialization.init(mockTyrano);

  // 4. `init` の後の `tyrano` の状態を確認
  if (tyranoInitialization.tyrano === mockTyrano) {
    console.log("test_tyranoInitialization PASSED");
  } else {
    console.error("test_tyranoInitialization FAILED");
  }
})();
