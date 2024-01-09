interface Dictionary {
  [key: string]: string | Function;
  toString(): string;
}

let dictionary: Dictionary = Object.create(null, {
  toString: {
    // toString プロパティの定義
    value() {
      // 値は関数です
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = "Apple";
(dictionary as any).__proto__ = "test"; // __proto__ への代入を行うために、一時的に any 型として扱います

// テスト
function testDictionary() {
  let keys = [];
  for (let key in dictionary) {
    keys.push(key);
  }

  const joinedKeys = keys.join();

  if (joinedKeys !== "apple,__proto__") {
    console.error(
      `Test failed! Expected 'apple,__proto__' but got '${joinedKeys}'`
    );
  } else {
    console.log("Test passed for keys!");
  }

  if (dictionary.toString() !== "apple,__proto__") {
    console.error(
      `Test failed for toString! Expected 'apple,__proto__' but got '${dictionary}'`
    );
  } else {
    console.log("Test passed for toString method!");
  }
}

testDictionary();
