interface Tyrano {
  kag: {
    tmp: {
      screen_info: ScreenInfo;
    };
  };
}

interface ScreenInfo {
  left: number;
  top: number;
  scale_x: number;
  scale_y: number;
}

const coordinateConverter = {
  tyrano: {} as Tyrano,

  convertPageXYIntoGameXY(
    page_x: number,
    page_y: number,
    as_int = false
  ): { x: number; y: number } {
    const info = this.tyrano.kag.tmp.screen_info;
    const x_removed_margin = page_x - info.left;
    const y_removed_margin = page_y - info.top;
    const x_unscaled = x_removed_margin / info.scale_x;
    const y_unscaled = y_removed_margin / info.scale_y;
    const x_rounded = as_int ? Math.floor(x_unscaled) : x_unscaled;
    const y_rounded = as_int ? Math.floor(y_unscaled) : y_unscaled;

    return {
      x: x_rounded,
      y: y_rounded,
    };
  },
};

// Testing starts from here

const test = (description: string, func: () => boolean) => {
  const result = func();
  console.log(`${description}: ${result ? "PASS" : "FAIL"}`);
};

coordinateConverter.tyrano = {
  kag: {
    tmp: {
      screen_info: {
        left: 10,
        top: 20,
        scale_x: 2,
        scale_y: 2,
      },
    },
  },
};

// Test cases
test("Check valid conversion without rounding", () => {
  const result = coordinateConverter.convertPageXYIntoGameXY(30, 50, false);
  return result.x === 10 && result.y === 15;
});

test("Check valid conversion with rounding", () => {
  const result = coordinateConverter.convertPageXYIntoGameXY(32, 52, true);
  return result.x === 11 && result.y === 16;
});

test("Type check - ScreenInfo properties", () => {
  const info: ScreenInfo = coordinateConverter.tyrano.kag.tmp.screen_info;
  return (
    typeof info.left === "number" &&
    typeof info.top === "number" &&
    typeof info.scale_x === "number" &&
    typeof info.scale_y === "number"
  );
});

test("Type check - convertPageXYIntoGameXY return", () => {
  const result = coordinateConverter.convertPageXYIntoGameXY(30, 50, false);
  return typeof result.x === "number" && typeof result.y === "number";
});
