interface EventElementConfig {
  j_target: HTMLElement;
  target: string;
  storage: string;
  tag: string;
  pm: object;
}

function addEventElement(obj: EventElementConfig) {
  const elem = obj.j_target;

  elem.classList.add("event-setting-element");
  elem.setAttribute("data-event-target", obj.target);
  elem.setAttribute("data-event-storage", obj.storage);
  elem.setAttribute("data-event-tag", obj.tag);
  elem.setAttribute("data-event-pm", JSON.stringify(obj.pm));
}

// テスト用のダミー要素とオブジェクトを作成
const dummyElement = document.createElement("div");
const config: EventElementConfig = {
  j_target: dummyElement,
  target: "some-target",
  storage: "some-storage",
  tag: "some-tag",
  pm: { key: "value" },
};

// 関数の実行
addEventElement(config);

// テスト関数
function test(description: string, callback: () => void) {
  try {
    callback();
    console.log(`[PASS] ${description}`);
  } catch (error) {
    console.error(`[FAIL] ${description}`, error);
  }
}

// テスト実行
test("addEventElement should set correct attributes and class", () => {
  if (!dummyElement.classList.contains("event-setting-element")) {
    throw new Error("Class 'event-setting-element' not set.");
  }
  if (dummyElement.getAttribute("data-event-target") !== config.target) {
    throw new Error("Attribute 'data-event-target' is not set correctly.");
  }
  if (dummyElement.getAttribute("data-event-storage") !== config.storage) {
    throw new Error("Attribute 'data-event-storage' is not set correctly.");
  }
  if (dummyElement.getAttribute("data-event-tag") !== config.tag) {
    throw new Error("Attribute 'data-event-tag' is not set correctly.");
  }
  if (
    dummyElement.getAttribute("data-event-pm") !== JSON.stringify(config.pm)
  ) {
    throw new Error("Attribute 'data-event-pm' is not set correctly.");
  }
});

// このコードは TypeScript Playground で直接実行できます
