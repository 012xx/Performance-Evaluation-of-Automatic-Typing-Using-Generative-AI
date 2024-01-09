// 型情報の付与
const map: Map<string, string> = new Map();

map.set("name", "John");

// 明示的にstring型の配列としてキーを取得
const keys: string[] = Array.from(map.keys());

keys.push("more");

// テスト関数
function testKeys() {
  if (keys.length !== 2) {
    console.error(
      `Test failed: Expected keys length to be 2 but got ${keys.length}`
    );
    return;
  }

  if (keys[0] !== "name" || keys[1] !== "more") {
    console.error(
      `Test failed: Expected keys to be ["name", "more"] but got ${keys}`
    );
    return;
  }

  console.log("Test passed!");
}

// テストを実行
testKeys();
