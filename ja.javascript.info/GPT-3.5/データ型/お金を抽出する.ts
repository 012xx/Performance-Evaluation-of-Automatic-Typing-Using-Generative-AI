// テスト成功

function extractCurrencyValue(str: string): number {
  return +str.slice(1);
}

// テスト関数
function testExtractCurrencyValue() {
  try {
    const result1: number = extractCurrencyValue('$120');
    if (result1 !== 120) throw new Error(`Failed: '$120' should be 120, but got ${result1}`);

    const result2: number = extractCurrencyValue('$99');
    if (result2 !== 99) throw new Error(`Failed: '$99' should be 99, but got ${result2}`);

    const result3: number = extractCurrencyValue('$0');
    if (result3 !== 0) throw new Error(`Failed: '$0' should be 0, but got ${result3}`);

    const result4: number = extractCurrencyValue('€10');
    if (result4 !== 10) throw new Error(`Failed: '€10' should be 10, but got ${result4}`);

    console.log("All tests passed.");
  } catch (error) {
    console.error("Some tests failed.", error);
  }
}

// テストを実行
testExtractCurrencyValue();