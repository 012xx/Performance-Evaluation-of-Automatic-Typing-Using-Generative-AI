function removeEventAttr(elem: HTMLElement) {
  elem.classList.remove("event-setting-element");
  elem.removeAttribute("data-event-target");
  elem.removeAttribute("data-event-storage");
  elem.removeAttribute("data-event-tag");
  elem.removeAttribute("data-event-pm");
}

// テスト用の要素を作成
const testElement = document.createElement("div");
testElement.classList.add("event-setting-element");
testElement.setAttribute("data-event-target", "target");
testElement.setAttribute("data-event-storage", "storage");
testElement.setAttribute("data-event-tag", "tag");
testElement.setAttribute("data-event-pm", JSON.stringify({ param: "value" }));

// removeEventAttr関数をテスト
removeEventAttr(testElement);

// 検証
console.assert(
  !testElement.classList.contains("event-setting-element"),
  "Class should be removed."
);
console.assert(
  !testElement.hasAttribute("data-event-target"),
  "Attribute data-event-target should be removed."
);
console.assert(
  !testElement.hasAttribute("data-event-storage"),
  "Attribute data-event-storage should be removed."
);
console.assert(
  !testElement.hasAttribute("data-event-tag"),
  "Attribute data-event-tag should be removed."
);
console.assert(
  !testElement.hasAttribute("data-event-pm"),
  "Attribute data-event-pm should be removed."
);

console.log("All tests passed!");
