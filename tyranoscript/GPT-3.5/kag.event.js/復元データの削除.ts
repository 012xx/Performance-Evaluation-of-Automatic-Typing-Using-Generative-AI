// JQueryのモック用型定義
type JQuery = {
  attr: (attrName: string, value?: string) => string | undefined | JQuery;
  removeAttr: (attrName: string) => JQuery;
  attributes: Record<string, any>;
};

function removeRestoreData(j_obj: JQuery, tag?: string): void {
  const restore_data_str = j_obj.attr("data-restore");
  if (typeof restore_data_str !== "string") return;

  if (!tag) {
    j_obj.removeAttr("data-restore");
    return;
  }

  const restore_data: { tag: string; pm: Record<string, any> }[] =
    JSON.parse(restore_data_str);
  const filtered_data = restore_data.filter((item) => item.tag !== tag);
  if (filtered_data.length > 0) {
    j_obj.attr("data-restore", JSON.stringify(filtered_data));
  } else {
    j_obj.removeAttr("data-restore");
  }
}

// -- 以下、テストの部分 --

// JQueryのモック関数
const mockJQuery = (attributes: Record<string, any> = {}): JQuery => ({
  attributes,
  attr: function (attrName: string, value?: string) {
    if (value === undefined) {
      return this.attributes[attrName] || this; // ここでJQueryオブジェクトを返す
    }
    this.attributes[attrName] = value;
    return this;
  },
  removeAttr: function (attrName: string) {
    delete this.attributes[attrName];
    return this;
  },
});

// テスト実行
function testRemoveRestoreData() {
  console.log("Testing removeRestoreData...");

  const j_obj: JQuery = mockJQuery({
    "data-restore": JSON.stringify([
      { tag: "tag1", pm: {} },
      { tag: "tag2", pm: {} },
    ]),
  });

  // 特定のタグを削除
  removeRestoreData(j_obj, "tag1");
  let data = j_obj.attr("data-restore");
  console.assert(
    typeof data === "string" && JSON.parse(data).length === 1,
    "Error: Incorrect number of elements after removal"
  );

  // すべてのタグを削除
  removeRestoreData(j_obj);
  data = j_obj.attr("data-restore");
  console.assert(
    data === undefined,
    "Error: data-restore attribute not removed after removing all tags"
  );

  console.log("Test finished.");
}

testRemoveRestoreData();
