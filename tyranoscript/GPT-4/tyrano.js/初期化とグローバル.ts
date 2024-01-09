// 必要な型定義
interface Plugin {
  [key: string]: any;
}

interface TyranoOptions {
  width: number;
  height: number;
  onComplete: () => void;
}

interface TyranoStatus {
  loaded_plugin: number;
}

// TyranoCore クラスの定義
class TyranoCore {
  base: any = null;
  options: TyranoOptions = { width: 0, height: 0, onComplete: () => {} };
  status: TyranoStatus = { loaded_plugin: 0 };

  init(options?: any) {
    // 実装は省略
  }

  loadPlugins(array_src: string[], callback?: (src: string[]) => void) {
    // 実装は省略
  }

  // その他のメソッド
}

// object 関数の定義
function object<T extends object, U extends object>(
  target: T,
  source: U
): T & U {
  return Object.assign({}, target, source);
}

// テスト関数の定義
function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

// TyranoCore のテスト
function testTyranoCore() {
  const tyranoCoreInstance = new TyranoCore();
  assert(
    typeof tyranoCoreInstance.init === "function",
    "TyranoCore should have an 'init' method"
  );
  assert(
    typeof tyranoCoreInstance.loadPlugins === "function",
    "TyranoCore should have a 'loadPlugins' method"
  );
  console.log("TyranoCore tests passed.");
}

// object 関数のテスト
function testObjectFunction() {
  const baseObject = { a: 1, b: 2 };
  const extension = { b: 3, c: 4 };
  const result = object(baseObject, extension);
  assert(
    result.a === 1 && result.b === 3 && result.c === 4,
    "object function should correctly assign properties"
  );
  console.log("object function tests passed.");
}

// テストの実行
testTyranoCore();
testObjectFunction();

// 全てのテストが通過したことを表示
console.log("All tests passed.");
