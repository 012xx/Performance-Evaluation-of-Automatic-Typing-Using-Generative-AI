// 元のクラス定義
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

// テスト用の関数
function test(description: string, func: () => void) {
  try {
    func();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

// テストケース
test("Animal インスタンスが名前を正しく設定する", () => {
  const animal = new Animal("Dog");
  if (animal.name !== "Dog") {
    throw new Error(`Expected animal.name to be "Dog", but got ${animal.name}`);
  }
});

test("Rabbit インスタンスが名前を正しく設定する", () => {
  const rabbit = new Rabbit("White Rabbit");
  if (rabbit.name !== "White Rabbit") {
    throw new Error(
      `Expected rabbit.name to be "White Rabbit", but got ${rabbit.name}`
    );
  }
});

test("Rabbit インスタンスが作成日時を正しく設定する", () => {
  const before = Date.now();
  const rabbit = new Rabbit("White Rabbit");
  const after = Date.now();

  if (rabbit.created < before || rabbit.created > after) {
    throw new Error(
      `Expected rabbit.created to be between ${before} and ${after}, but got ${rabbit.created}`
    );
  }
});
