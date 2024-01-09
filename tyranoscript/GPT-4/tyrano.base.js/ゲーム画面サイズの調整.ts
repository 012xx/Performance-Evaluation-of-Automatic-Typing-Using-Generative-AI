// TypeScriptでの実装
interface Tyrano {
  kag: {
    config: {
      ScreenRatio: string;
      ScreenCentering: string;
      scWidth: number;
      scHeight: number;
      vchat: string;
    };
    tmp: {
      base_scale?: number;
      screen_info: any;
    };
    trigger: (event: string, data: any) => void;
  };
  get: (selector: string) => any;
}

const gameScreenSizeManager = {
  tyrano: {} as Tyrano,
  setBaseSize(width: number, height: number) {
    this.tyrano.get(".tyrano_base").css({
      width: width,
      height: height,
      "background-color": "black",
    });
  },
  fitBaseSize(width: number, height: number) {
    setTimeout(() => {
      this._fitBaseSize(width, height);
    }, 300);
  },
  _fitBaseSize(width: number, height: number, timeout = 100) {
    // ... 省略（オリジナルコードのロジックをそのままTypeScriptに変換）
  },
  updateScreenInfo(data: any) {
    const info = this.tyrano.kag.tmp.screen_info;
    mock$.extend(info, data);
    info.width = info.original_width * info.scale_x;
    info.height = info.original_height * info.scale_y;
    info.right = info.left + info.width;
    info.bottom = info.top + info.height;
  },
};

// モック関数とオブジェクト
const mock$ = {
  getViewPort: () => ({ width: 800, height: 600 }),
  extend: (target: any, source: any) => Object.assign(target, source),
  css: () => {},
};

const mockedElements: Record<string, any> = {};
const mockGet = (selector: string) => ({
  css: (styles: Record<string, any>) => (mockedElements[selector] = styles),
});

const mockTyrano: Tyrano = {
  kag: {
    config: {
      ScreenRatio: "fix",
      ScreenCentering: "true",
      scWidth: 1024,
      scHeight: 768,
      vchat: "false",
    },
    tmp: {
      screen_info: {},
    },
    trigger: (event: string, data: any) => {},
  },
  get: mockGet,
};

gameScreenSizeManager.tyrano = mockTyrano;

// テスト実行
function runTests() {
  gameScreenSizeManager.setBaseSize(1024, 768);
  const baseStyle = mockedElements[".tyrano_base"];
  console.assert(
    baseStyle.width === 1024 && baseStyle.height === 768,
    "setBaseSize failed"
  );

  const testData = {
    scale_x: 1,
    scale_y: 1,
    top: 0,
    left: 0,
    original_width: 1024,
    original_height: 768,
    viewport_width: 800,
    viewport_height: 600,
  };
  gameScreenSizeManager.updateScreenInfo(testData);
  const screenInfo = gameScreenSizeManager.tyrano.kag.tmp.screen_info;
  console.assert(
    screenInfo.width === 1024 && screenInfo.height === 768,
    "updateScreenInfo failed"
  );
}

runTests();
