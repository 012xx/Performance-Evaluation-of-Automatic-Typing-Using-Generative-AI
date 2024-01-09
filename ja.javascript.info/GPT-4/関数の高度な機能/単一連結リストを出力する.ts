type ListNode = {
  value: number;
  next: ListNode | null;
};

let list: ListNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list: ListNode): void {
  alert(list.value); // 現在のアイテムを出力

  if (list.next) {
    printList(list.next); // 残ったリストに対して同じことをする
  }
}

// テスト
function testPrintList() {
  let mockAlert = "";
  const originalAlert = window.alert;
  window.alert = (msg: any) => {
    mockAlert += msg + " ";
  };

  printList(list);

  if (mockAlert.trim() === "1 2 3 4") {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected '1 2 3 4' but got '${mockAlert.trim()}'`
    );
  }

  window.alert = originalAlert; // restore original alert function
}

testPrintList();
