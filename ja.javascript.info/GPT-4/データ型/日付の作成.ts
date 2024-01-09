let d: Date = new Date(2012, 1, 20, 3, 12);
alert(d);

// テスト関数
function testDateCreation() {
  let expectedDate: Date = new Date(2012, 1, 20, 3, 12);
  if (d.getTime() !== expectedDate.getTime()) {
    console.error(`Test failed: Expected ${expectedDate} but got ${d}`);
  } else {
    console.log("Date creation test passed!");
  }
}

// テストの実行
testDateCreation();
