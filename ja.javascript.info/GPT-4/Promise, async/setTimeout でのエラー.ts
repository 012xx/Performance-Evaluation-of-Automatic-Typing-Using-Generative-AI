new Promise<void>((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// テスト
function testPromiseError(): void {
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Whoops!"));
    }, 1000);
  }).catch((error) => {
    if (error.message === "Whoops!") {
      console.log("Test passed!");
    } else {
      console.error("Test failed!");
    }
  });
}

testPromiseError();
