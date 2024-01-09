type Message = {
  text: string;
  from: string;
};

let messages: Message[] = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet<Message>();

// 2つのメッセージは読まれました
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages は2つの要素を持っています

// ...再び最初のメッセージを読みましょう!
readMessages.add(messages[0]);
// readMessages は依然として2つのユニークな要素をもっています

// テスト関数
function testReadMessages() {
  if (!readMessages.has(messages[0])) {
    console.error("Test failed: Expected message[0] to be read");
    return;
  }
  console.log("Test passed for read message[0]!");

  messages.shift();

  if (readMessages.has(messages[0])) {
    console.error(
      "Test failed: Expected message[0] not to be in readMessages after shift"
    );
    return;
  }
  console.log("Test passed for message[0] after shifting!");
}

// テストを実行
testReadMessages();
