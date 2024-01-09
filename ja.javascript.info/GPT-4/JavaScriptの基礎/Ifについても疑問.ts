// 既存のalertを一時保存
const originalAlert = window.alert;

let alertMessages: string[] = [];

// alertをオーバーライドして、メッセージを保存
window.alert = function(message?: any): void {
    alertMessages.push(message?.toString() || "");
};

try {
    if (-1 || 0) alert('first');
    if (-1 && 0) alert('second');
    if (null || -1 && 1) alert('third');

    const expectedMessages = ["first", "third"];
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