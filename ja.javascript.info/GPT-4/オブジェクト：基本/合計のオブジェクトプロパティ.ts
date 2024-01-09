type Salaries = {
  [key: string]: number;
};

let salaries: Salaries = {
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
function testTotalSalaries(salaries: Salaries, expected: number): void {
  let calculatedSum: number = 0;
  for (let key in salaries) {
    calculatedSum += salaries[key];
  }

  if (calculatedSum !== expected) {
    console.error(
      `Test failed. Expected sum to be ${expected}, but got ${calculatedSum}`
    );
  } else {
    console.log(`Test passed!`);
  }
}

testTotalSalaries(salaries, 390);
