async function loadJson(url: string): Promise<any> {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new Error(String(response.status));
}

loadJson("no-such-user.json").catch(alert);

// テスト
async function testLoadJson(): Promise<void> {
  try {
    await loadJson("no-such-user.json");
    console.error(
      "Test failed: Expected to throw an error for 'no-such-user.json'"
    );
  } catch (error) {
    if (error.message === "404") {
      console.log("Test passed!");
    } else {
      console.error(`Test failed: Unexpected error message ${error.message}`);
    }
  }
}

testLoadJson();
