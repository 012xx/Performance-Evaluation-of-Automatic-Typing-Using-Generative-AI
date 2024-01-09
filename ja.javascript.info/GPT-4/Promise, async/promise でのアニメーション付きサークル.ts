function go(): void {
  showCircle(150, 150, 100).then((div) => {
    div.classList.add("message-ball");
    div.append("Hello, world!");
  });
}

function showCircle(
  cx: number,
  cy: number,
  radius: number
): Promise<HTMLDivElement> {
  let div = document.createElement("div");
  div.style.width = 0 + "px";
  div.style.height = 0 + "px";
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise<HTMLDivElement>((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}

// テスト
function testShowCircle() {
  showCircle(100, 100, 50).then((div) => {
    if (div.style.width === "100px" && div.style.height === "100px") {
      console.log("Test passed!");
      document.body.removeChild(div); // cleanup the added element
    } else {
      console.error("Test failed!");
    }
  });
}

testShowCircle();
