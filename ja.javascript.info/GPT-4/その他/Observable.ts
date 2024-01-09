const handlers = Symbol("handlers");

interface ObservableTarget {
  [handlers]?: Array<(key: string, value: any) => void>;
  observe?: (handler: (key: string, value: any) => void) => void;
  [key: string]: any;
}

function makeObservable(target: ObservableTarget): ObservableTarget {
  target[handlers] = [];

  target.observe = function (handler: (key: string, value: any) => void) {
    this[handlers]!.push(handler);
  };

  return new Proxy(target, {
    set(
      target: ObservableTarget,
      property: string,
      value: any,
      receiver: any
    ): boolean {
      let success = Reflect.set(target, property, value, receiver);
      if (success) {
        target[handlers]!.forEach((handler) => handler(property, value));
      }
      return success;
    },
  });
}

let user: ObservableTarget = {};

user = makeObservable(user);

user.observe!((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John";

// Test
function testObservable() {
  let observedKey = "";
  let observedValue = "";

  let testUser: ObservableTarget = {};
  testUser = makeObservable(testUser);
  testUser.observe!((key, value) => {
    observedKey = key;
    observedValue = value;
  });

  testUser.name = "TestName";

  if (observedKey !== "name" || observedValue !== "TestName") {
    console.error("Test failed");
  } else {
    console.log("Test passed!");
  }
}

testObservable();
