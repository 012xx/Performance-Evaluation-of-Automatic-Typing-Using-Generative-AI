// 仮の型と関数の定義
type User = {
  login: (isLoggedIn: boolean) => void;
};

function askPassword(ok: () => void, fail: () => void): void {
  // この関数の実装は例示的です。実際の動作に合わせて調整してください。
  let password = prompt("Password?", "");
  if (password === "correct") {
    ok();
  } else {
    fail();
  }
}

let user: User = {
  login(isLoggedIn) {
    if (isLoggedIn) {
      console.log("User logged in");
    } else {
      console.log("User failed to log in");
    }
  },
};

askPassword(
  () => user.login(true),
  () => user.login(false)
);

// Test
function testAskPassword() {
  // テストの実装は、実際の動作と依存関係に応じて調整する必要があります。
  // 以下は仮のテストコードです。
  let mockUser: User = {
    login(isLoggedIn) {
      if (!isLoggedIn) {
        console.error("Test failed: Expected user to be logged in");
      } else {
        console.log("Test passed!");
      }
    },
  };

  askPassword(
    () => mockUser.login(true),
    () => mockUser.login(false)
  );
}

testAskPassword();
