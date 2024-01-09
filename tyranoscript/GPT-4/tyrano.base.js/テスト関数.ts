const tyranoTester = {
  test(): void {
    alert("tyrano test");
  },
};

// テストを実行
(function testTyranoTester() {
  const isFunction = typeof tyranoTester.test === "function";
  if (!isFunction) {
    console.error("Test FAILED: tyranoTester.test is not a function");
    return;
  }

  // ここでは alert の動作はテストしない
  console.log("Test PASSED: tyranoTester.test is a function");
})();

// このテストでは tyranoTester.test 関数が存在し、正しい型（関数型）を持っていることを確認します。
// 実際の `alert` の動作は、このシンプルなテストスコープでは確認しません。
