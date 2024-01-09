interface JQuery {
  attr(attributeName: string, value?: string): string | void;
}

function addRestoreData(j_obj: JQuery, tag: string, pm: object): void {
  const restore_data_str = j_obj.attr("data-restore");
  let restore_data = restore_data_str
    ? (JSON.parse(restore_data_str) as { tag: string; pm: object }[])
    : [];
  restore_data.push({ tag, pm });
  j_obj.attr("data-restore", JSON.stringify(restore_data));
}

// テスト用のモックJQueryオブジェクトの定義
class MockJQuery {
  private attributes: { [key: string]: string } = {};

  attr(attributeName: string, value?: string): string | void {
    if (value === undefined) {
      return this.attributes[attributeName];
    } else {
      this.attributes[attributeName] = value;
    }
  }
}

// テストの実行
(() => {
  const j_obj = new MockJQuery();
  const pm = { exampleKey: "exampleValue" };

  addRestoreData(j_obj, "testTag", pm);

  // 結果の検証
  const result = j_obj.attr("data-restore");
  if (result) {
    const data = JSON.parse(result);
    if (
      data[0].tag === "testTag" &&
      JSON.stringify(data[0].pm) === JSON.stringify(pm)
    ) {
      console.log("Test passed");
    } else {
      console.error("Test failed");
    }
  } else {
    console.error("Test failed - no data");
  }
})();
