// 元のクラス定義
class FormatError extends SyntaxError {
  constructor(message: string) {
    super(message);
    this.name = "FormatError";
  }
}

// テスト用の関数
function test(description: string, func: () => void): void {
  try {
    func();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

// テストケース
test("FormatError インスタンスがメッセージを正しく設定する", () => {
  const err = new FormatError("formatting error");
  if (err.message !== "formatting error") {
    throw new Error(
      `Expected err.message to be "formatting error", but got ${err.message}`
    );
  }
});

test("FormatError インスタンスの名前が 'FormatError' である", () => {
  const err = new FormatError("formatting error");
  if (err.name !== "FormatError") {
    throw new Error(
      `Expected err.name to be "FormatError", but got ${err.name}`
    );
  }
});

test("FormatError インスタンスが SyntaxError のインスタンスである", () => {
  const err = new FormatError("formatting error");
  if (!(err instanceof SyntaxError)) {
    throw new Error(`Expected err to be an instance of SyntaxError`);
  }
});

test("FormatError インスタンスが stack プロパティを持つ", () => {
  const err = new FormatError("formatting error");
  if (typeof err.stack === "undefined") {
    throw new Error(`Expected err.stack to be defined`);
  }
});
