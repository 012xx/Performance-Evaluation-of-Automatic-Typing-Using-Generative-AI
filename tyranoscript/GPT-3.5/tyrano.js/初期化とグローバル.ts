interface TyranoCoreOptions {
  width: number;
  height: number;
  onComplete(): void;
}

interface TyranoCore {
  init(options?: TyranoCoreOptions): void;
}

// 一時的なオブジェクトを作成するためのダミーの `object` 関数
function object<T>(obj: T): T {
  return obj;
}

// 一時的なオブジェクトを作成
const tyranoCore: TyranoCore = {
  init: function (options?: TyranoCoreOptions): void {
    if (options) {
      console.log(`Width: ${options.width}, Height: ${options.height}`);
      options.onComplete();
    }
  },
};

const TYRANO: TyranoCore = object(tyranoCore);
(window as any).TYRANO = TYRANO;

if (!("console" in window)) {
  (window as any).console = {};
  window.console.log = function (str: any) {
    return str;
  };
}

// ダミーの `$` 関数を定義
function $(callback: () => void): void {
  callback();
}

$(function () {
  TYRANO.init({
    width: 0,
    height: 0,
    onComplete: function () {},
  });
});

// テスト
function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

function runTests() {
  assert(TYRANO.init !== undefined, "TYRANO.init should be defined.");
  assert(
    typeof TYRANO.init === "function",
    "TYRANO.init should be a function."
  );
  assert(
    (window as any).TYRANO === TYRANO,
    "TYRANO should be available globally."
  );

  const dummyOptions: TyranoCoreOptions = {
    width: 100,
    height: 200,
    onComplete: function () {
      console.log("onComplete called");
    },
  };

  let logCalled = false;
  const originalLog = console.log;
  console.log = function (str: any) {
    logCalled = true;
    originalLog.call(console, str);
  };

  TYRANO.init(dummyOptions);
  assert(logCalled, "TYRANO.init should log to console.");

  // Restore the original console.log
  console.log = originalLog;
}

runTests();
