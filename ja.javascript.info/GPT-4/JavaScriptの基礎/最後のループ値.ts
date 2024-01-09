// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessages: number[] = [];

// alertをオーバーライドして、メッセージを保存
window.alert = function(message?: any): void {
    alertMessages.push(Number(message));
};

try {
    let i: number = 3;

    while (i) {
        alert(i--);
    }

    const expectedMessages = [3, 2, 1];
    if (JSON.stringify(alertMessages) !== JSON.stringify(expectedMessages)) {
        console.error(`Unexpected alert sequence. Expected ${JSON.stringify(expectedMessages)}, but got ${JSON.stringify(alertMessages)}`);
    } else {
        console.log("Test passed!");
    }
} catch (error) {
    console.error("テストが失敗しました:", error);
} finally {
    // 元のalert関数に戻す
    window.alert = originalAlert;
}