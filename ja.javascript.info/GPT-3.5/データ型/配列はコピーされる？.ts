// テスト成功

// Your existing code
let fruits: string[] = ["Apples", "Pear", "Orange"];
let shoppingCart: string[] = fruits;
shoppingCart.push("Banana");

// Test function
function testShoppingCartAndFruits() {
  // Checking the length of the arrays
  if (fruits.length !== 4) {
    throw new Error(`Test Failed: Expected fruits.length to be 4, got ${fruits.length}`);
  }
  
  if (shoppingCart.length !== 4) {
    throw new Error(`Test Failed: Expected shoppingCart.length to be 4, got ${shoppingCart.length}`);
  }

  // Checking the last element in the arrays
  if (fruits[3] !== 'Banana') {
    throw new Error(`Test Failed: Expected last element of fruits to be 'Banana', got ${fruits[3]}`);
  }

  if (shoppingCart[3] !== 'Banana') {
    throw new Error(`Test Failed: Expected last element of shoppingCart to be 'Banana', got ${shoppingCart[3]}`);
  }

  console.log('All tests passed');
}

// Run the test
testShoppingCartAndFruits();