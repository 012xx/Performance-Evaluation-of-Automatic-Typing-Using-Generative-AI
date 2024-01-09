type Message = {
  text: string;
  from: string;
};

let messages: Message[] = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMap = new WeakMap<Message, Date>();

readMap.set(messages[0], new Date(2017, 1, 1));

// テスト関数
function testReadMap() {
  let date = readMap.get(messages[0]);
  if (
    !date ||
    date.getFullYear() !== 2017 ||
    date.getMonth() !== 1 ||
    date.getDate() !== 1
  ) {
    console.error(
      "Test failed: Expected date for messages[0] to be 2017-02-01"
    );
    return;
  }
  console.log("Test passed for readMap date of messages[0]!");
}

// テストを実行
testReadMap();
