// Your original code
const dictionary = {
  apple: "Apple",
  toString() {
    return Object.keys(this).join();
  },
};

(dictionary as any).__proto__ = "test";

// Test Suite
function runTests() {
  // Test 1: Check if dictionary contains the correct keys
  let keys = Object.keys(dictionary);
  if (keys.length === 1 && keys.includes("apple")) {
    console.log("Test 1 passed: dictionary contains the correct keys.");
  } else {
    console.error(
      "Test 1 failed: dictionary does not contain the correct keys."
    );
  }

  // Test 2: Check the toString method
  let stringRepresentation = dictionary.toString();
  if (stringRepresentation === "apple") {
    console.log("Test 2 passed: toString method works correctly.");
  } else {
    console.error(
      `Test 2 failed: toString method does not work correctly. Got ${stringRepresentation}`
    );
  }

  // Test 3: Check individual properties
  if (
    dictionary.apple === "Apple" &&
    (dictionary as any).__proto__ === "test"
  ) {
    console.log("Test 3 passed: individual properties are correct.");
  } else {
    console.error("Test 3 failed: individual properties are not correct.");
  }
}

// Run the tests
runTests();
