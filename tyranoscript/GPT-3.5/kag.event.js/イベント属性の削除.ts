// JQueryのモック用型定義
type JQuery = {
  removeClass: (className: string) => JQuery;
  removeAttr: (attrName: string) => JQuery;
  attributes: Record<string, any>;
};

function removeEventAttr(j_obj: JQuery): void {
  j_obj
    .removeClass("event-setting-element")
    .removeAttr("data-event-target")
    .removeAttr("data-event-storage")
    .removeAttr("data-event-tag")
    .removeAttr("data-event-pm");
}

// -- 以下、テストの部分 --

// JQueryのモック関数
const mockJQuery = (attributes: Record<string, any> = {}): JQuery => ({
  attributes,
  removeClass: function (className: string) {
    console.log(`removeClass called with: ${className}`);
    return this;
  },
  removeAttr: function (attrName: string) {
    delete this.attributes[attrName];
    console.log(`removeAttr called with: ${attrName}`);
    return this;
  },
});

// テスト実行
function testRemoveEventAttr() {
  console.log("Testing removeEventAttr...");

  const initialAttributes = {
    class: "event-setting-element",
    "data-event-target": "targetValue",
    "data-event-storage": "storageValue",
    "data-event-tag": "tagValue",
    "data-event-pm": JSON.stringify({ key: "value" }),
  };

  const j_obj: JQuery = mockJQuery(initialAttributes);

  removeEventAttr(j_obj);

  // 各属性が削除されていることを確認
  console.assert(
    j_obj.attributes["class"] === undefined,
    "Error: class attribute not removed"
  );
  console.assert(
    j_obj.attributes["data-event-target"] === undefined,
    "Error: data-event-target attribute not removed"
  );
  console.assert(
    j_obj.attributes["data-event-storage"] === undefined,
    "Error: data-event-storage attribute not removed"
  );
  console.assert(
    j_obj.attributes["data-event-tag"] === undefined,
    "Error: data-event-tag attribute not removed"
  );
  console.assert(
    j_obj.attributes["data-event-pm"] === undefined,
    "Error: data-event-pm attribute not removed"
  );

  console.log("Test finished.");
}

testRemoveEventAttr();
