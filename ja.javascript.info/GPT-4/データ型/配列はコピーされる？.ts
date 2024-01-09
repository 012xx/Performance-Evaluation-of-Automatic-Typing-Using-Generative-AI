let fruits: string[] = ["Apples", "Pear", "Orange"];
let shoppingCart: string[] = fruits;
shoppingCart.push("Banana");
alert(fruits.length);  // 4

// テスト関数
function testFruitsArray() {
    if (fruits.length !== 4) {
        console.error(`Test failed. Expected fruits length to be 4, but got ${fruits.length}`);
    } else {
        console.log("Test passed.");
    }

    if (fruits[3] !== "Banana") {
        console.error(`Test failed. Expected the last item in fruits to be "Banana", but got ${fruits[3]}`);
    } else {
        console.log("Test passed for the last item.");
    }
}

// テストを実行
testFruitsArray();