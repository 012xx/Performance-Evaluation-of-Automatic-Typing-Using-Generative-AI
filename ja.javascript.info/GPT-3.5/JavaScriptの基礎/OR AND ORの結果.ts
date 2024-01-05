// テスト成功

function showAlert(): void {
  alert(null || (2 && 3) || 4);
}

// Test for showAlert function
(function testShowAlert(): void {
  // Backup original alert
  const originalAlert: typeof window.alert = window.alert;

  // Capturing values passed to alert
  let alertedValue: any;

  // Overriding alert to capture its arguments
  window.alert = (value: any) => {
    alertedValue = value;
  };

  // Run the showAlert function
  showAlert();

  // Check if the output is as expected
  if (typeof alertedValue === "number" && alertedValue === 3) {
    console.log("Test passed!");
  } else {
    console.error(`Test failed! Expected a number 3 but got ${alertedValue}`);
  }

  // Restore original alert
  window.alert = originalAlert;
})();
