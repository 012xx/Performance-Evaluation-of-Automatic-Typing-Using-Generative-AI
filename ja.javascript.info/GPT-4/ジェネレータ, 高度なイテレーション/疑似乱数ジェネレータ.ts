function* pseudoRandom(seed: number): Generator<number> {
  let value = seed;

  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

const generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

// Test
function testPseudoRandom() {
  const testGenerator = pseudoRandom(1);
  const results = [
    testGenerator.next().value,
    testGenerator.next().value,
    testGenerator.next().value,
  ];
  const expectedResults = [16807, 282475249, 1622650073];

  for (let i = 0; i < results.length; i++) {
    if (results[i] !== expectedResults[i]) {
      console.error(
        `Test failed at index ${i}: Expected ${expectedResults[i]}, but got ${results[i]}.`
      );
      return;
    }
  }
  console.log("All tests passed!");
}

testPseudoRandom();
