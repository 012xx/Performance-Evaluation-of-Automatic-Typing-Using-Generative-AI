type User = {
    name: string;
    [key: string]: any;
};

function wrap<T extends object>(target: T): T {
    return new Proxy(target, {
        get(target, prop: string, receiver: any) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(`Property doesn't exist: "${prop}"`);
            }
        }
    });
}

let user: User = {
    name: "John"
};

user = wrap(user);

alert(user.name); // John
// alert(user.age); // Error: Property doesn't exist - Uncommenting this line will throw an error

// Test
function testWrap() {
    try {
        alert(user.age);
    } catch (e) {
        if (e instanceof ReferenceError && e.message === 'Property doesn\'t exist: "age"') {
            console.log('Test passed!');
        } else {
            console.error('Test failed:', e);
        }
    }
}

testWrap();