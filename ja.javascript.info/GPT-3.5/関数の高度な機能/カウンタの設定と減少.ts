// テスト成功

function makeCounter(): {
  (): number; // カウンター関数
  set: (value: number) => void; // カウントの設定
  decrease: () => void; // カウントダウン
} {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value: number) => {
    count = value;
  };

  counter.decrease = () => {
    count--;
  };

  return counter;
}

// テスト関数
function testMakeCounter() {
  const counter = makeCounter();

  // counter() メソッドのテスト
  if (counter() !== 0) {
    console.error("Test failed: counter() did not return 0");
    return;
  }

  if (counter() !== 1) {
    console.error("Test failed: counter() did not return 1");
    return;
  }

  // counter.set メソッドのテスト
  counter.set(10);
  if (counter() !== 10) {
    console.error(
      "Test failed: counter() did not return 10 after counter.set(10)"
    );
    return;
  }

  // counter.decrease メソッドのテスト
  counter.decrease();
  if (counter() !== 10) {
    console.error(
      "Test failed: counter() did not return 10 after counter.decrease()"
    );
    return;
  }

  console.log("All tests passed!");
}

// テストを実行
testMakeCounter();
