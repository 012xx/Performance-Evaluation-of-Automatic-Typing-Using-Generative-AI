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

function printReverseList(list: ListNode): void {
  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

printReverseList(list);

// テスト
function testPrintReverseList() {
  let mockAlert = "";
  const originalAlert = window.alert;
  window.alert = (msg: any) => {
    mockAlert += msg + " ";
  };

  printReverseList(list);

  if (mockAlert.trim() === "4 3 2 1") {
    console.log("Test passed!");
  } else {
    console.error(
      `Test failed! Expected '4 3 2 1' but got '${mockAlert.trim()}'`
    );
  }

  window.alert = originalAlert; // restore original alert function
}

testPrintReverseList();
