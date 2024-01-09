// 元のコード
class Clock {
  private _template: string;
  private _timer: number | undefined;

  constructor({ template }: { template: string }) {
    this._template = template;
  }

  private _render() {
    // ...（省略）...
  }

  stop() {
    if (this._timer) {
      clearInterval(this._timer);
    }
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

// テスト用の関数
function test(description: string, func: () => void) {
  try {
    func();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

// console.log をモック化
const originalConsoleLog = console.log;
let logOutput: string | null = null;
console.log = (output: string) => {
  logOutput = output;
};

// clearInterval をモック化
const originalClearInterval = clearInterval;
let timerCleared = false;
clearInterval = (timer: number | undefined) => {
  if (timer) timerCleared = true;
};

// テストケース
test("Clock インスタンスの _render メソッドが適切な形式で時間を出力する", () => {
  const clock = new Clock({ template: "h:m:s" });
  (clock as any)._render(); // privateメソッドなのでキャストしてアクセス
  const outputArray = logOutput!.split(":");
  if (outputArray.length !== 3) {
    throw new Error(`Expected output in h:m:s format but got ${logOutput}`);
  }
});

test("Clock インスタンスの stop メソッドが _timer をクリアする", () => {
  const clock = new Clock({ template: "h:m:s" });
  clock.start();
  clock.stop();
  if (!timerCleared) {
    throw new Error("Expected timer to be cleared, but it was not");
  }
});

// モックを元に戻す
console.log = originalConsoleLog;
clearInterval = originalClearInterval;
