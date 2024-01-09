type Shooter = () => void;

function makeArmy(): Shooter[] {
  let shooters: Shooter[] = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // 射手(shooter) 関数
      alert(i); // その番号を表示するべき
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

// テスト
function testArmy() {
  const originalAlert = window.alert;
  let alertOutput: number[] = [];
  window.alert = (msg: any) => alertOutput.push(+msg);

  army[0]();
  army[5]();

  if (alertOutput[0] !== 0 || alertOutput[1] !== 5) {
    console.error(
      "Test failed: Expected army[0] to alert 0 and army[5] to alert 5."
    );
  } else {
    console.log("Test passed!");
  }

  window.alert = originalAlert; // restore original alert function
}

testArmy();
