class Rabbit {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit
Rabbit.prototype.sayHi.call(undefined); // undefined
Object.getPrototypeOf(rabbit).sayHi.call(undefined); // undefined
Object.getPrototypeOf(rabbit).sayHi.call(undefined); // 同じ結果を得るため、再度使用

// テスト
function testRabbit() {
  const originalLog = console.log;
  let logOutput = "";

  console.log = (msg: string) => {
    logOutput += msg + " ";
  };

  rabbit.sayHi();
  Rabbit.prototype.sayHi.call(undefined);
  Object.getPrototypeOf(rabbit).sayHi.call(undefined);
  Object.getPrototypeOf(rabbit).sayHi.call(undefined);

  if (logOutput.trim() === "Rabbit undefined undefined undefined") {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected 'Rabbit undefined undefined undefined' but got '${logOutput.trim()}'`
    );
  }

  console.log = originalLog;
}

testRabbit();
