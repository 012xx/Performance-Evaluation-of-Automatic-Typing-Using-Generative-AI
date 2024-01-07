// テスト成功

// Your original code
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

const salaries: Salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries));

// Test cases
function testSumSalaries() {
  // Test case 1: Sum of salaries should be 650
  const sum1 = sumSalaries(salaries);
  if (sum1 !== 650) {
    console.error(`Test case 1 failed. Expected 650, got ${sum1}`);
    return;
  }

  // Test case 2: Sum of an empty object should be 0
  const sum2 = sumSalaries({});
  if (sum2 !== 0) {
    console.error(`Test case 2 failed. Expected 0, got ${sum2}`);
    return;
  }

  // Test case 3: Sum of different salaries
  const sum3 = sumSalaries({"Alice": 400, "Bob": 200, "Eve": 100});
  if (sum3 !== 700) {
    console.error(`Test case 3 failed. Expected 700, got ${sum3}`);
    return;
  }

  console.log("All test cases passed");
}

// Run the tests
testSumSalaries();