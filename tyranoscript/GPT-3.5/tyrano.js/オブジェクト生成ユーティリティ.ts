type ObjectType = { [key: string]: any };

function object(...args: ObjectType[]): ObjectType {
  const f: { prototype: ObjectType } = object.f;
  let n: ObjectType = Object.create(f.prototype);

  for (let i = 0, len = args.length; i < len; ++i) {
    const argument = args[i];
    for (const prop in argument) {
      if (argument.hasOwnProperty(prop)) {
        n[prop] = argument[prop];
      }
    }
  }

  return n;
}

object.f = function () {};

// 使用例
const obj1 = { x: 1 };
const obj2 = object(obj1, { y: 2 }, { z: 3 });

// Test utility
function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`✅ ${message}`);
  } else {
    console.error(`❌ ${message}`);
  }
}

// Tests
function runTests() {
  // Test 1: Ensure merging of objects
  assert(
    obj2.x === 1 && obj2.y === 2 && obj2.z === 3,
    "Object properties should merge correctly."
  );

  // Test 2: Ensure the original object is not mutated
  assert(
    !("y" in obj1) && !("z" in obj1),
    "Original object should not be mutated."
  );

  // Test 3: Ensure type consistency
  const obj3 = object({ a: "hello" }, { b: true });
  const isTypeConsistent: boolean =
    "a" in obj3 &&
    typeof obj3.a === "string" &&
    "b" in obj3 &&
    typeof obj3.b === "boolean";
  assert(isTypeConsistent, "Object properties should maintain their types.");
}

runTests();
