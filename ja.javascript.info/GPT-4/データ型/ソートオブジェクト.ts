type Person = {
  name: string;
  age: number;
};

function sortByName(arr: Person[]): void {
  arr.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
}

const john: Person = { name: "John", age: 25 };
const pete: Person = { name: "Pete", age: 30 };
const mary: Person = { name: "Mary", age: 28 };

const arr: Person[] = [john, pete, mary];

sortByName(arr);

alert(arr[1].name); // Mary

// テスト関数
function testSortByName() {
  if (
    arr[0].name !== "John" ||
    arr[1].name !== "Mary" ||
    arr[2].name !== "Pete"
  ) {
    console.error(
      `Test failed: Expected sorted order "John, Mary, Pete" but got "${arr
        .map((p) => p.name)
        .join(", ")}"`
    );
  } else {
    console.log("Test passed for sortByName function!");
  }
}

// テストを実行
testSortByName();
