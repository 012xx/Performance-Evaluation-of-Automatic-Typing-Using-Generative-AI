// JQueryのモック用型定義
type JQuery = {
  attr: (attrName: string, value?: string) => string | undefined | JQuery;
  attributes: Record<string, any>;
};

function addRestoreData(
  j_obj: JQuery,
  tag: string,
  pm: Record<string, any>
): void {
  const restore_data_str = j_obj.attr("data-restore") as string | undefined;
  let restore_data: { tag: string; pm: Record<string, any> }[] =
    restore_data_str ? JSON.parse(restore_data_str) : [];
  restore_data.push({ tag, pm });
  j_obj.attr("data-restore", JSON.stringify(restore_data));
}

// -- 以下、テストの部分 --

// JQueryのモック関数
const mockJQuery = (attributes: Record<string, any> = {}): JQuery => ({
  attributes,
  attr: function (attrName: string, value?: string) {
    if (value === undefined) {
      return this.attributes[attrName];
    }
    this.attributes[attrName] = value;
    return this;
  },
});

// テスト実行
function testAddRestoreData() {
  console.log("Testing addRestoreData...");

  const j_obj: JQuery = mockJQuery({});

  // データ追加テスト
  addRestoreData(j_obj, "testTag", { key1: "value1" });
  let data = j_obj.attr("data-restore") as string;
  console.assert(data !== undefined, "Error: data-restore attribute not set");
  console.assert(
    JSON.parse(data).length === 1,
    "Error: Incorrect number of elements in restore data"
  );

  // 追加データテスト
  addRestoreData(j_obj, "testTag2", { key2: "value2" });
  data = j_obj.attr("data-restore") as string;
  console.assert(
    JSON.parse(data).length === 2,
    "Error: Incorrect number of elements after second addition"
  );

  console.log("Test finished.");
}

testAddRestoreData();
