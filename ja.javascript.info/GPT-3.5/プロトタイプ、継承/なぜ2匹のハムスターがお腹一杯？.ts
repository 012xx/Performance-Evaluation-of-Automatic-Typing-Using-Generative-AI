// Your original code
class Hamster {
  stomach: string[] = [];

  eat(food: string): void {
    this.stomach.push(food);
  }
}

const speedy = new Hamster();
const lazy = new Hamster();

// Test Suite
function runTests(): void {
  let testPassed = true;

  // Test 1: Check if speedy's stomach contains "apple"
  speedy.eat("apple");
  if (speedy.stomach[0] !== "apple") {
    console.error(
      `Test 1 failed: Expected "apple" but got ${speedy.stomach[0]}`
    );
    testPassed = false;
  }

  // Test 2: Check if lazy's stomach is empty
  if (lazy.stomach.length !== 0) {
    console.error(
      `Test 2 failed: Expected an empty stomach but got ${lazy.stomach.length} items`
    );
    testPassed = false;
  }

  // Test 3: Check if both speedy and lazy are instances of Hamster
  if (!(speedy instanceof Hamster) || !(lazy instanceof Hamster)) {
    console.error(
      "Test 3 failed: speedy or lazy is not an instance of Hamster"
    );
    testPassed = false;
  }

  // Output test result
  if (testPassed) {
    console.log("All tests passed!");
  }
}

// Run the tests
runTests();
