class Rabbit {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(): string {
    return this.name;
  }
}

// Test Suite
const runTests = () => {
  const rabbit = new Rabbit("Rabbit");

  // Test 1: Check sayHi method for instance of Rabbit
  if (rabbit.sayHi() === "Rabbit") {
    console.log('Test 1 passed: rabbit object says "Rabbit".');
  } else {
    console.error('Test 1 failed: rabbit object does not say "Rabbit".');
  }

  // Test 2: Check type of name property in Rabbit instance
  if (typeof rabbit.name === "string") {
    console.log("Test 2 passed: rabbit.name is a string.");
  } else {
    console.error("Test 2 failed: rabbit.name is not a string.");
  }

  // Test 3: Check sayHi method returns a string
  if (typeof rabbit.sayHi() === "string") {
    console.log("Test 3 passed: rabbit.sayHi() returns a string.");
  } else {
    console.error("Test 3 failed: rabbit.sayHi() does not return a string.");
  }

  // Test 4: Check sayHi method on Rabbit.prototype
  if (Rabbit.prototype.sayHi.call({ name: "Test" }) === "Test") {
    console.log("Test 4 passed: Rabbit.prototype.sayHi works as expected.");
  } else {
    console.error(
      "Test 4 failed: Rabbit.prototype.sayHi does not work as expected."
    );
  }
};

// Run the tests
runTests();
