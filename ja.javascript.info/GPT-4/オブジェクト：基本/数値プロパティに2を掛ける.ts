type NumericObject = {
  [key: string]: number | string;
};

function multiplyNumeric(obj: NumericObject): void {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// テスト
const testObject: NumericObject = {
  age: 25,
  name: "John",
  salary: 1000,
  city: "NY",
};

multiplyNumeric(testObject);

if (testObject.age !== 50) {
  console.error(
    `Test failed for property "age". Expected 50, got ${testObject.age}`
  );
} else if (testObject.name !== "John") {
  console.error(
    `Test failed for property "name". Expected "John", got ${testObject.name}`
  );
} else if (testObject.salary !== 2000) {
  console.error(
    `Test failed for property "salary". Expected 2000, got ${testObject.salary}`
  );
} else if (testObject.city !== "NY") {
  console.error(
    `Test failed for property "city". Expected "NY", got ${testObject.city}`
  );
} else {
  console.log("All tests passed!");
}
