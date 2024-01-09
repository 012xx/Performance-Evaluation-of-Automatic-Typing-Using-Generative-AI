class MockElement {
  private attributes: Record<string, string> = {};

  attr(attributeName: string, value?: string): string | void {
    if (value !== undefined) {
      this.attributes[attributeName] = value;
    } else {
      return this.attributes[attributeName];
    }
  }

  removeAttr(attributeName: string): void {
    delete this.attributes[attributeName];
  }
}

function removeRestoreData(j_obj: MockElement, tag: string): void {
  const restore_data_str = j_obj.attr("data-restore");
  if (!restore_data_str) return;

  if (!tag) {
    j_obj.removeAttr("data-restore");
    return;
  }

  const restore_data: { tag: string; pm: object }[] =
    JSON.parse(restore_data_str);
  const filtered_data = restore_data.filter((item) => item.tag !== tag);

  if (filtered_data.length > 0) {
    j_obj.attr("data-restore", JSON.stringify(filtered_data));
  } else {
    j_obj.removeAttr("data-restore");
  }
}

function testRemoveRestoreData() {
  const elem = new MockElement();
  elem.attr(
    "data-restore",
    JSON.stringify([
      { tag: "test1", pm: {} },
      { tag: "test2", pm: {} },
    ])
  );

  // テストケース1: 特定のタグを削除
  removeRestoreData(elem, "test1");
  let expected = '[{"tag":"test2","pm":{}}]';
  console.assert(
    elem.attr("data-restore") === expected,
    `Test 1 Failed: Expected ${expected}, but found ${elem.attr(
      "data-restore"
    )}`
  );
  console.log("Test 1 Passed");

  // テストケース2: すべてのタグを削除
  removeRestoreData(elem, "");
  console.assert(
    elem.attr("data-restore") === undefined,
    `Test 2 Failed: Expected undefined, but found ${elem.attr("data-restore")}`
  );
  console.log("Test 2 Passed");
}

testRemoveRestoreData();
