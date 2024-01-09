function getMaxSubSum(arr: number[]): number {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0

// テスト関数
function testGetMaxSubSum() {
    const testCases = [
        { input: [-1, 2, 3, -9], expected: 5 },
        { input: [-1, 2, 3, -9, 11], expected: 11 },
        { input: [-2, -1, 1, 2], expected: 3 },
        { input: [100, -9, 2, -3, 5], expected: 100 },
        { input: [1, 2, 3], expected: 6 },
        { input: [-1, -2, -3], expected: 0 }
    ];

    for (let testCase of testCases) {
        const result = getMaxSubSum(testCase.input);
        if (result !== testCase.expected) {
            console.error(`For input ${testCase.input}, expected ${testCase.expected} but got ${result}`);
        } else {
            console.log(`Test passed for input ${testCase.input}`);
        }
    }
}

// テストを実行
testGetMaxSubSum();s