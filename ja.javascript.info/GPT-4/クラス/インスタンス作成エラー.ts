class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  created: number;

  constructor(name: string) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name); // White Rabbit

// テスト
function testRabbitCreation() {
  const rabbitTest = new Rabbit("Test Rabbit");
  if (
    rabbitTest.name === "Test Rabbit" &&
    typeof rabbitTest.created === "number"
  ) {
    console.log("Test passed!");
  } else {
    console.error("Test failed!");
  }
}

testRabbitCreation();
