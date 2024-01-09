type User = {
    name?: string;
    surname?: string;
  };
  
  let user: User = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
  
  // テスト
  function testUserObject(user: User): void {
    if (user.name) {
      console.error("Test failed. The name property should be deleted, but it exists.");
    } else if (user.surname !== "Smith") {
      console.error(`Test failed. Expected surname to be "Smith", but got "${user.surname}".`);
    } else {
      console.log("All tests passed!");
    }
  }
  
  testUserObject(user);