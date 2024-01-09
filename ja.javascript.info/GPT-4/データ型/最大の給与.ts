type Salaries = {
  [key: string]: number;
};

function topSalary(salaries: Salaries): string | null {
  let max = 0;
  let maxName: string | null = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

// テスト関数
function testTopSalary() {
  let sampleSalaries: Salaries = {
    John: 1000,
    Pete: 3000,
    Mary: 2500,
  };

  let result = topSalary(sampleSalaries);
  if (result !== "Pete") {
    console.error(`Test failed: Expected "Pete" but got ${result}`);
  } else {
    console.log("Test passed!");
  }
}

// テストの実行
testTopSalary();
