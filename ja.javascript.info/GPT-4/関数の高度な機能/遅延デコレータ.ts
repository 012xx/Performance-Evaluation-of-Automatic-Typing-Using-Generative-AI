function delay<T extends any[]>(f: (...args: T) => void, ms: number): (...args: T) => void {
    return function(this: any, ...args: T) {
        setTimeout(() => f.apply(this, args), ms);
    };
}

// テスト
function testDelayFunction(): void {
    let log = "";

    function mockLog(msg: string): void {
        log += msg + ";";
    }

    const delayedLog = delay(mockLog, 50);
    delayedLog("Hello");
    delayedLog("World");

    setTimeout(() => {
        if (log === "Hello;World;") {
            console.log("Test passed!");
        } else {
            console.error(`Test failed! Expected 'Hello;World;' but got '${log}'`);
        }
    }, 100);
}

testDelayFunction();｀