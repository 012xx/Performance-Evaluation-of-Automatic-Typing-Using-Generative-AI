// テスト成功

const expectedResults = [true, false, true, true, false, false, false];
const expressions = [
  5 > 4,
  "apple" > "pineapple",
  "2" > "12",
  undefined == null,
  undefined === null,
  null == "\n0\n",
  null === +"\n0\n",
];

for (let i = 0; i < expressions.length; i++) {
  if (expressions[i] !== expectedResults[i]) {
    console.error(
      `Test ${i + 1} failed! Expected ${expectedResults[i]}, but got ${
        expressions[i]
      }`
    );
  } else {
    console.log(`Test ${i + 1} passed!`);
  }
}
