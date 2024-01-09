interface ScreenInfo {
  left: number;
  top: number;
  scale_x: number;
  scale_y: number;
}

interface Tyrano {
  kag: {
    tmp: {
      screen_info: ScreenInfo;
    };
  };
}

const coordinateConverter = {
  tyrano: {} as Tyrano,
  convertPageXYIntoGameXY(
    page_x: number,
    page_y: number,
    as_int: boolean = false
  ): { x: number; y: number } {
    const info = this.tyrano.kag.tmp.screen_info;
    const x_removed_margin = page_x - info.left;
    const y_removed_margin = page_y - info.top;
    const x_unscaled = x_removed_margin / info.scale_x;
    const y_unscaled = y_removed_margin / info.scale_y;
    const x_rounded = as_int ? Math.round(x_unscaled) : x_unscaled;
    const y_rounded = as_int ? Math.round(y_unscaled) : y_unscaled;

    return {
      x: x_rounded,
      y: y_rounded,
    };
  },
};

// テスト用の設定
coordinateConverter.tyrano = {
  kag: {
    tmp: {
      screen_info: {
        left: 100,
        top: 50,
        scale_x: 2,
        scale_y: 2,
      },
    },
  },
};

// テスト関数
function testConvertPageXYIntoGameXY() {
  const testCases = [
    { page_x: 300, page_y: 200, as_int: true, expected: { x: 100, y: 75 } },
    { page_x: 300, page_y: 200, as_int: false, expected: { x: 100, y: 75 } },
    // 他のテストケースを追加可能
  ];

  testCases.forEach((testCase) => {
    const result = coordinateConverter.convertPageXYIntoGameXY(
      testCase.page_x,
      testCase.page_y,
      testCase.as_int
    );
    const isTestPassed =
      result.x === testCase.expected.x && result.y === testCase.expected.y;
    console.log(
      `Test ${isTestPassed ? "passed" : "failed"}: Expected (${
        testCase.expected.x
      }, ${testCase.expected.y}), got (${result.x}, ${result.y})`
    );
  });
}

// テスト実行
testConvertPageXYIntoGameXY();
