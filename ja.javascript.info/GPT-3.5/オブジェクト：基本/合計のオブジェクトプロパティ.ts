// テスト成功

let salaries: Record<string, number> = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum: number = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// テスト
function testSalariesSum(): void {
  let expectedSum: number = 390;

  if (sum === expectedSum) {
    console.log(`Test passed: Total sum of salaries is ${expectedSum}.`);
  } else {
    console.error(
      `Test failed: Expected total sum to be ${expectedSum} but got ${sum}.`
    );
  }
}

// テストを実行
testSalariesSum();
