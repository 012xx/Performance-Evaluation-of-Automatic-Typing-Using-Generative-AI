function ucFirst(str: string): string {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function testUcFirst() {
    const tests = [
        {input: "john", expected: "John"},
        {input: "John", expected: "John"},
        {input: "", expected: ""},
        {input: "a", expected: "A"},
        {input: "abc", expected: "Abc"}
    ];

    for (let test of tests) {
        const result = ucFirst(test.input);
        if (result !== test.expected) {
            console.error(`Test failed for input "${test.input}". Expected "${test.expected}", but got "${result}"`);
        } else {
            console.log(`Test passed for input "${test.input}"`);
        }
    }
}

// テスト実行
testUcFirst();

// このアラートはオプションですが、オリジナルのコードに含まれていたためこちらにも記載しています
alert(ucFirst("john"));  // Johns