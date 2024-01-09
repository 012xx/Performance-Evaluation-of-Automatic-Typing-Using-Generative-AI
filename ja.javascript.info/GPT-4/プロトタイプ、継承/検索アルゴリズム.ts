type ObjectType = {
  glasses?: number;
  pen?: number;
  sheet?: number;
  pillow?: number;
  money?: number;
  __proto__?: ObjectType;
};

let head: ObjectType = {
  glasses: 1,
};

let table: ObjectType = {
  pen: 3,
  __proto__: head,
};

let bed: ObjectType = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets: ObjectType = {
  money: 2000,
  __proto__: bed,
};

// テスト
function testPrototypes(): void {
  if (pockets.pen !== 3) {
    console.error(
      `Test failed for pockets.pen. Expected 3 but got ${pockets.pen}`
    );
    return;
  }

  if (bed.glasses !== 1) {
    console.error(
      `Test failed for bed.glasses. Expected 1 but got ${bed.glasses}`
    );
    return;
  }

  if (table.money !== undefined) {
    console.error(
      `Test failed for table.money. Expected undefined but got ${table.money}`
    );
    return;
  }

  console.log("All tests passed!");
}

testPrototypes();
