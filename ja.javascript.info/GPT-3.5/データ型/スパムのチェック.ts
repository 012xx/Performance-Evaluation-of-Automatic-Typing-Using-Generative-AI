// テスト失敗

function testCheckSpam(): void {
  try {
    if (!checkSpam('buy ViAgRA now')) throw new Error("Failed: 'buy ViAgRA now' should be identified as spam.");
    if (!checkSpam('free xxxxx')) throw new Error("Failed: 'free xxxxx' should be identified as spam.");
    if (checkSpam("innocent rabbit")) throw new Error("Failed: 'innocent rabbit' should not be identified as spam.");
    if (checkSpam("")) throw new Error("Failed: An empty string should not be identified as spam.");

    console.log("All tests passed.");
  } catch (error) {
    console.error("Some tests failed.", error);
  }
}

// Run the test
testCheckSpam();