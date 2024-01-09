// Your original code with type annotations
interface Head {
  glasses: number;
}

interface Table extends Head {
  pen: number;
}

interface Bed extends Table {
  sheet: number;
  pillow: number;
}

interface Pockets extends Bed {
  money: number;
}

const head: Head = {
  glasses: 1,
};

const table: Table = {
  pen: 3,
  __proto__: head,
};

const bed: Bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

const pockets: Pockets = {
  money: 2000,
  __proto__: bed,
};

// Test Suite
function runTests() {
  let testPassed = true;

  // Test 1: Check if pockets.pen is 3
  if (pockets.pen !== 3) {
    console.error(`Test 1 failed: Expected 3 but got ${pockets.pen}`);
    testPassed = false;
  }

  // Test 2: Check if bed.glasses is 1
  if (bed.glasses !== 1) {
    console.error(`Test 2 failed: Expected 1 but got ${bed.glasses}`);
    testPassed = false;
  }

  // Test 3: Check if table.money is undefined
  if (table.money !== undefined) {
    console.error(`Test 3 failed: Expected undefined but got ${table.money}`);
    testPassed = false;
  }

  // Output test result
  if (testPassed) {
    console.log("All tests passed!");
  }
}

// Run the tests
runTests();
