// テスト成功

// Original function definition
function showAlert(): void {
  alert(alert(1) || 2 || alert(3));
}

// Test for showAlert function
(function testShowAlert() {
  // Backup original alert
  const originalAlert = window.alert;

  // Capturing values passed to alert
  const alertedValues: (string | number)[] = [];

  // Overriding alert to capture its arguments
  window.alert = (value?: any) => {
    alertedValues.push(value);
  };

  // Run the showAlert function
  showAlert();

  // Check if the outputs are as expected
  const isCorrect =
    alertedValues.length === 2 &&
    alertedValues[0] === 1 &&
    alertedValues[1] === 2;

  // Restore original alert
  window.alert = originalAlert;

  // Log the result
  if (isCorrect) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed! Expected [1, 2] but got ${alertedValues}`);
  }
})();
