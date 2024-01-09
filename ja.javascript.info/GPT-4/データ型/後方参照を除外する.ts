interface Person {
    name: string;
}

interface Room {
    number: number;
    occupiedBy?: Meetup;
}

interface Meetup {
    title: string;
    occupiedBy: Person[];
    place: Room;
    self?: Meetup;
}

let room: Room = {
    number: 23
};

let meetup: Meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

// テスト
function testMeetupStructure() {
    const jsonString = JSON.stringify(meetup, function replacer(key, value) {
        return (key != "" && value == meetup) ? undefined : value;
    });
    const expectedString = `{"title":"Conference","occupiedBy":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}`;
    console.assert(jsonString === expectedString, `Expected ${expectedString} but got ${jsonString}`);
}

// テストの実行
testMeetupStructure();