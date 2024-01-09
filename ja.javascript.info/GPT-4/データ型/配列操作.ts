let styles: string[] = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Reggie");

// テスト関数
function testStylesArray() {
  if (styles.length !== 4) {
    console.error(
      `Test failed. Expected styles length to be 4, but got ${styles.length}`
    );
  } else {
    console.log("Test passed for array length.");
  }

  if (styles[0] !== "Rap") {
    console.error(
      `Test failed. Expected the first item in styles to be "Rap", but got ${styles[0]}`
    );
  } else {
    console.log("Test passed for the first item.");
  }

  if (styles[2] !== "Classics") {
    console.error(
      `Test failed. Expected the third item in styles to be "Classics", but got ${styles[2]}`
    );
  } else {
    console.log("Test passed for the third item.");
  }
}

// テストを実行
testStylesArray();
