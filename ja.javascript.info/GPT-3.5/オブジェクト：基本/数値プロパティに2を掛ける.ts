//　テスト成功

// 呼び出し前
let menu: { [key: string]: any } = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

function multiplyNumeric(obj: { [key: string]: any }): void {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// テスト
function testMultiplyNumeric(): void {
  let expectedMenu: { [key: string]: any } = {
    width: 400,
    height: 600,
    title: "My menu",
  };

  let isPassed: boolean = true;

  for (let key in expectedMenu) {
    if (menu[key] !== expectedMenu[key]) {
      isPassed = false;
      console.error(
        `Test failed: Expected ${key} to be ${expectedMenu[key]} but got ${menu[key]}.`
      );
    }
  }

  if (isPassed) {
    console.log("All tests passed!");
  }
}

// テストを実行
testMultiplyNumeric();
