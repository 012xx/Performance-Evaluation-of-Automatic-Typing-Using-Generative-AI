function askPassword(ok: () => void, fail: () => void): void {
  let password: string | null = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// テスト
function testAskPassword(): void {
  const originalPrompt = window.prompt;
  const originalAlert = window.alert;

  let promptedValue: string | null = null;
  let alertedValue: string | null = null;

  window.prompt = (message?: string, _default?: string) => {
    promptedValue = message || "";
    return "rockstar"; // mock input
  };
  window.alert = (msg: string) => {
    alertedValue = msg;
  };

  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  if (promptedValue === "Password?" && alertedValue === "John logged in") {
    console.log("Test passed!");
  } else {
    console.error(`Test failed!`);
  }

  window.prompt = originalPrompt; // restore original prompt function
  window.alert = originalAlert; // restore original alert function
}

testAskPassword();
