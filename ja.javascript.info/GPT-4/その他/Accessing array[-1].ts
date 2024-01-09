let array: number[] = [1, 2, 3];

array = new Proxy(array, {
  get(target: number[], prop: string, receiver: any) {
    let index = +prop;
    if (index < 0) {
      index += target.length;
    }
    return Reflect.get(target, index.toString(), receiver);
  },
});

alert(array[-1]); // 3
alert(array[-2]); // 2

// Test
function testArrayProxy() {
  if (array[-1] !== 3 || array[-2] !== 2) {
    console.error("Test failed");
  } else {
    console.log("Test passed!");
  }
}

testArrayProxy();
