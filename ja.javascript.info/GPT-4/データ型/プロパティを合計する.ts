type Salaries = {
  [key: string]: number;
};

function sumSalaries(salaries: Salaries): number {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}

// テスト関数
function testSumSalaries() {
  const testSalaries: Salaries = {
    John: 1000,
    Pete: 1500,
    Mary: 800,
  };

  const result = sumSalaries(testSalaries);
  if (result !== 3300) {
    console.error(
      `Test failed: Expected sum of salaries to be 3300, but got ${result}`
    );
    return;
  }

  console.log("Test passed for sumSalaries!");
}

// テストを実行
testSumSalaries();
