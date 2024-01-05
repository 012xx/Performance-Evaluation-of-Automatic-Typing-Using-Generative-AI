function showAlert(): void {
  if (-1 || 0) alert("first");
  if (-1 && 0) alert("second");
  if (null || (-1 && 1)) alert("third");
}

// Test for showAlert function
(() => {
  const originalAlert: typeof alert = window.alert; // Capture the original alert method for restoring later
  let alertedMessages: string[] = []; // To capture the alert messages

  // Overriding alert to capture its arguments
  window.alert = (message: string): void => {
    alertedMessages.push(message);
  };

  // Run the showAlert function
  showAlert();

  // Check if the output messages are as expected
  const expectedMessages: string[] = ["first", "third"];

  if (JSON.stringify(alertedMessages) === JSON.stringify(expectedMessages)) {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected ${JSON.stringify(
        expectedMessages
      )} but got ${JSON.stringify(alertedMessages)}`
    );
  }

  // Restore original alert
  window.alert = originalAlert;
})();
