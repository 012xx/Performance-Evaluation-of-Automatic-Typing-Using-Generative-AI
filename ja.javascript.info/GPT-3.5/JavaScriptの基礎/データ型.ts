// テスト成功

let name: string = "Ilya";

// 式は数字の1です
alert(`hello ${1}`); // hello 1

// 式は文字列の "name" です
alert(`hello ${"name"}`); // hello name

// 式は変数で、そこに埋め込まれます
alert(`hello ${name}`); // hello Ilya

let testsResults = [];

function runTests() {
  // 既存のalertを一時保存
  const originalAlert = window.alert;

  // alertをオーバーライドして、テスト結果を保存
  window.alert = function (message) {
    let match = message.match(/hello (.*)/);
    if (match) {
      testsResults.push(match[1]);
    }
  };

  alert(`hello ${1}`);
  alert(`hello ${"name"}`);
  alert(`hello ${name}`);

  // テスト結果の検証
  try {
    if (testsResults[0] !== "1" || typeof 1 !== "number") {
      throw new Error(
        `Expected value 1 of type number, but got ${
          testsResults[0]
        } of type ${typeof testsResults[0]}`
      );
    }

    if (testsResults[1] !== "name" || typeof "name" !== "string") {
      throw new Error(
        `Expected value "name" of type string, but got ${
          testsResults[1]
        } of type ${typeof testsResults[1]}`
      );
    }

    if (testsResults[2] !== "Ilya" || typeof name !== "string") {
      throw new Error(
        `Expected value "Ilya" of type string, but got ${
          testsResults[2]
        } of type ${typeof testsResults[2]}`
      );
    }

    console.log("全てのテストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  } finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
  }
}

runTests();
