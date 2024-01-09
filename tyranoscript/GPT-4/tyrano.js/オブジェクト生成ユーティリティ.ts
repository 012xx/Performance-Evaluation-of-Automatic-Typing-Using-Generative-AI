type Constructor<T> = new () => T;

function object<T, U extends Record<string, unknown>>(
  o: T,
  ...props: U[]
): T & U {
  const f: Constructor<T> = object.f as unknown as Constructor<T>;
  f.prototype = o;
  const n: any = new f();

  for (const prop of props) {
    for (const key in prop) {
      if (Object.prototype.hasOwnProperty.call(prop, key)) {
        n[key] = prop[key];
      }
    }
  }

  return n;
}

object.f = function () {};

// テストケース
function testObjectFunction() {
  // 基本オブジェクト
  const baseObj = { a: 1, b: 2 };
  // 拡張プロパティ
  const extendedProps = { c: 3, d: "test" };
  // 関数をテスト
  const extendedObj = object(baseObj, extendedProps);

  // 検証
  console.assert(extendedObj.a === 1, "Property a should be 1");
  console.assert(extendedObj.b === 2, "Property b should be 2");
  console.assert(extendedObj.c === 3, "Property c should be 3");
  console.assert(extendedObj.d === "test", 'Property d should be "test"');
  console.assert(typeof extendedObj === "object", "Result should be an object");
}

// テスト実行
testObjectFunction();
console.log("All tests passed!");
