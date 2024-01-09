function readNumber(): number | null {
    let num: string | null;

    do {
        num = prompt("Enter a number please?", "0");
    } while (num !== null && !isFinite(+num));

    if (num === null || num === '') return null;

    return +num;
}

function testReadNumber() {
    const originalPrompt = window.prompt;

    // シナリオ1: 有効な数字を入力する
    window.prompt = () => "5";
    if (readNumber() !== 5) {
        console.error("Test failed for valid number input");
    } else {
        console.log("Test passed for valid number input");
    }

    // シナリオ2: 最初は無効な値を入力してから有効な数字を入力する
    let counter = 0;
    window.prompt = () => {
        counter++;
        return counter === 1 ? "abc" : "10";
    };
    if (readNumber() !== 10) {
        console.error("Test failed for invalid to valid number input");
    } else {
        console.log("Test passed for invalid to valid number input");
    }

    // シナリオ3: nullを返す（キャンセルをクリック）
    window.prompt = () => null;
    if (readNumber() !== null) {
        console.error("Test failed for null input");
    } else {
        console.log("Test passed for null input");
    }

    // promptのオリジナルの振る舞いを復元
    window.prompt = originalPrompt;
}

// 実際に関数を実行
alert(`Read: ${readNumber()}`);

// テストを実行
testReadNumber();