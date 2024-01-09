class HttpError extends Error {
  response: Response;
  constructor(response: Response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url: string): Promise<any> {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Ask for a valid GitHub user until one is provided
async function demoGithubUser(): Promise<any> {
  let user;
  while (true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // No errors, break out of loop
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // After the alert, loop will continue
        alert("No such user, please reenter.");
      } else {
        // Unknown error, rethrow
        throw err;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

// Test
async function testDemoGithubUser() {
  try {
    const user = await demoGithubUser();
    if (user && user.name) {
      console.log("Test passed: User found:", user.name);
    } else {
      console.error("Test failed: User not found");
    }
  } catch (error) {
    console.error("Test failed with error:", error);
  }
}

testDemoGithubUser();
